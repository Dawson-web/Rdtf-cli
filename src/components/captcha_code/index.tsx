import { TextInput } from "@mantine/core";
import { getCaptcha } from "../../service";
import { useState, useEffect } from "react";
import { Tooltip } from "@mantine/core";

export function CaptchaCode() {
  const [captcha, setCaptcha] = useState<string>("");
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    setCaptcha(getCaptcha());
  }, []);
  return (
    <div className="flex  gap-2 items-end">
      <TextInput label="验证码" onChange={(e) => setCode(e.target.value)} />
      <Tooltip label="点击更换" position="bottom" withArrow>
        <img
          src={captcha}
          alt="captcha"
          onClick={() => {
            setCaptcha(getCaptcha());
          }}
        ></img>
      </Tooltip>
    </div>
  );
}
