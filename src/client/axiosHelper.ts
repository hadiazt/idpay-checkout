import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Config } from "../config";
import { Query } from "../types/CreatePaymentTypes";
import { _AxiosErrorTypes, _AxiosResponseTypes } from "../types/AxiosTypes";

export const _Axios = function (Method: string, URL: string, Data: Query) {
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

  return new Promise((resolve, reject) => {
    axios(config)
      .then((res: AxiosResponse) => {
        console.log(Data);
        
        const { id, link } = res.data as _AxiosResponseTypes;
        if (URL === "payment") {
          resolve({ ID: id, link: link });
        }
      })
      .catch((e: AxiosError) => {
        const { error_code, error_message } = e.response
          .data as _AxiosErrorTypes;
        reject({ ErrCode: error_code, ErrMessage: error_message });
      });
  });
};
