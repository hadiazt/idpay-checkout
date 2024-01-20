import axios, { AxiosRequestConfig } from "axios";
import { Config } from "../config";
import { Query } from "../types/CreatePayment";

export const _Axios = async function (
  Method: string,
  URL: string,
  Data: Query
) {
  var config: AxiosRequestConfig = {
    method: Method,
    url: Config.URL + URL,
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": this.API_KEY,
      "X-SANDBOX": this.SandBox,
    },
    data: Data,
  };
  return axios(config);
};
