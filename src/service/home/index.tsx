import { $axios } from "../../api";
import { ApiOk } from "../../api/types";
import { IUserFormData } from "../../types/home";

export const getUserInfo = async () => {
    return await $axios.get<ApiOk<IUserFormData>>("/user/info");
  };
  