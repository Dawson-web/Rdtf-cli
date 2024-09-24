import { $axios } from "../api";
import { ApiOk } from "../api/types";
import { apiConfig } from "../config";
import { ILoginFileds } from "../types";

export const getCaptcha = () => {
  return `${apiConfig.baseUrl}/captcha?nonce=${new Date().getTime()}`;
};

export const login = async (form: ILoginFileds, code: string) => {
  console.log('Captcha验证码：', code);
  return await $axios.post<ApiOk<string>>("/login", {
    email: form.email,
    password: form.password,
  });
};
