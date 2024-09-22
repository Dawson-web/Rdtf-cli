import { $axios } from "../api";
import { apiConfig } from "../config";
import { ILoginFileds } from "../types";

export const getCaptcha = () => {
  return `${apiConfig.baseUrl}/captcha?nonce=${new Date().getTime()}`;
};

export const login = async (form: ILoginFileds, code: string) => {
  return await $axios.post("/login", {
    email: form.email,
    password: form.password,
  });
};
