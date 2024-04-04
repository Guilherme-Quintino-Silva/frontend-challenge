export interface UserCreate {
  messageSucess: string;
  userCreate: string;
  validPasswordBoolean: boolean;
  token: string;
}
export interface UserError {
  error: {
    errorMessage: string,
    errorBoolean?: boolean
  }
}
export interface UserGroup {
  email: string;
  password: string;
}
