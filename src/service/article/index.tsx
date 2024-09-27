import { $axios } from "@/api";
import { ApiOk } from "@/api/types";
import { IAddArticleResponse, IArticleFiled } from "@/types/article";

export const addArticle = async (data: IArticleFiled) => {
  return await $axios.post<ApiOk<IAddArticleResponse>>("/user/articles", {
    title: data.title,
    content: data.content,
    type: data.type,
  });
};
