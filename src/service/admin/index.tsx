import { $axios } from "@/api";
import { ApiOk } from "@/api/types";

export const sendAnnouncements = async () => {
  return await $axios.post<ApiOk<null>>("/admin/email");
};
