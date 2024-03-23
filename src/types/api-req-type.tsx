export type CallAPIReqType = {
  apiURL: string;
  method: string;
  data: object | any;
  authTokenRequired: boolean;
  isBaseURLRequired: boolean;
};