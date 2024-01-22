import { Config } from "../config";
import { Query } from "../types/CreatePaymentTypes";
import { _AxiosErrorTypes, _AxiosResponseTypes } from "../types/AxiosTypes";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const _Axios = function (Method: string, URL: string, Data: Query) {
  const config: AxiosRequestConfig = {
    method: Method,
    url: Config.URL + URL,
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": this.API_KEY,
      "X-SANDBOX": this.SandBox,
    },
    data: Data,
  };

  return new Promise<{}>((resolve, reject) => {
    axios(config)
      .then((res: AxiosResponse<_AxiosResponseTypes>) => {
        const { id, link } = res.data;
        switch (URL) {
          case "payment":
            resolve({ ID: id, Link: link });
            break;

          default:
            reject("Unsupported URL");
            break;
        }
      })
      .catch((e: AxiosError<_AxiosErrorTypes>) => {
        if (!e.response) {
          reject(e);
        } else {
          const { error_code, error_message } = e.response.data;
          reject({ ErrCode: error_code, ErrMessage: error_message });
        }
      });
  });
};
