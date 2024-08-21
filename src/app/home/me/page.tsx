"use client";

import Form from "@/components/client/form";
import { formConfig } from "@/config";
import { useForm } from "@mantine/form";
interface Filedls {
  email: string;
  password: string;
  age: number;
  img: File | null;
  termsOfService: boolean;
}

export default function Page(props: any) {
  const form = useForm<Filedls>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      age: 0,
      img: null,
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "请输入正确的邮箱"),
      termsOfService: (value) => (value ? null : "请同意服务条款"),
    },
  });
  const fn = (v: Filedls) => {
    console.log(v);
  };

  return (
    <div className="my-[10vw]">
      <Form form_config={formConfig.maintenanceForm} form={form} fn={fn} />
    </div>
  );
}
