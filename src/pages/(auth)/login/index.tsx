import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRef } from "react";
import { AppLogo } from "../../../components/app-logo";
import { Link, useNavigate } from "react-router-dom";
import CaptchaCode from "../../../components/captcha_code";
import { ILoginFileds } from "../../../types";
import { login } from "../../../service";
import { toast } from "sonner";
import { setToken } from "../../../api/token";

export default function Page() {
  const errorTimes = useRef(0);
  const navigate = useNavigate()

  const code = useRef("");
  const getCaptchaCode = (value: string) => {
    code.current = value;
  };
  const form = useForm<ILoginFileds>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "请输入正确的邮箱"),
    },
  });
  return (
    <div className=" flex flex-col items-center gap-8">
      <div className="flex items-center gap-2">
        <AppLogo />
        <div className="font-comfortaa text-xl font-semibold">| 登录</div>
      </div>
      <form
        onSubmit={form.onSubmit(async (v) => {
          try {
           await login(v, code.current).then((res) => {
              setToken(res.data.data);
              navigate("/home")
            })
            ;
          } catch (error) {
            toast.error(error as string);
          }
        })}
        className="relative flex w-[30vw] min-w-[320px] max-w-[400px]  flex-col gap-2 overflow-hidden rounded-md border bg-white p-4 shadow-md"
      >
        <TextInput
          label="邮箱"
          id="email"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="密码"
          id="password"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <CaptchaCode getCaptchaCode={getCaptchaCode} />
        {errorTimes.current >= 2 ? (
          <Link to="/seekback" className="text-xs opacity-50 hover:opacity-75">
            忘记密码？前往找回
          </Link>
        ) : (
          <Link to="/register" className="text-xs opacity-50 hover:opacity-75">
            没有账号？前往注册
          </Link>
        )}

        <Group justify="flex-end" mt="md">
          <Button type="submit">登录</Button>
        </Group>

        <div className="absolute inset-x-0 top-0 h-1 bg-blue-500"></div>
      </form>
    </div>
  );
}
