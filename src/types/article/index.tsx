export interface IArticleFiled {
  title: string;
  content: string;
  type: string;
}

export interface IAddArticleResponse {
  id: number;
  title: string;
  content: string;
  type: string;
  userInfoId: string;
  commentId: string;
  createdAt: string;
  updatedAt: string;
  likesCount: number;
}
