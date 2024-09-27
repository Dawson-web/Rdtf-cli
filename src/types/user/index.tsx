export interface IAccountData {
  email: string;
  password?: string;
}

export interface IUserFormData {
  id: string;
  introduce: string;
  role: number;
  username: string;
  avatar: string;
  school: string;
  createdAt: string;
  updatedAt: string;
  User: IAccountData;
}

export interface IFormContext {
  userFormData: IUserFormData;
  updateFormData: (key: string, data: unknown) => void;
}
