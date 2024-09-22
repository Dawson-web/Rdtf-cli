import { apiConfig } from "../config";

export const getCaptcha = () => {
  return `${apiConfig.baseUrl}/captcha?nonce=${new Date().getTime()}`;
};
