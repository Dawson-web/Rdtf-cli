import { IUserInfo } from "../user";

export interface IArticleFiled {
  title: string;
  content: string;
  type: string | null;
}

export interface IArticleDetail {
  id: number;
  title: string;
  content: string;
  type: string;
  userInfoId: string;
  commentId: string;
  createdAt: string;
  updatedAt: string;
  likesCount: number;
  UserInfo: IUserInfo;
}

export interface IPagination {
  currentPage: number;
  total: number;
  pageSize: number;
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

export interface IGetArticleRecommandResponse {
  articles: IArticleDetail[];
  pagination: IPagination;
}
