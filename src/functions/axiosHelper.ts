import { Config } from "../config";
import { CreatePaymentQuery } from "../types/CreatePaymentTypes";
import {
  VerifyPaymentQuery,
  VerifyPaymentStatusCodes,
} from "../types/VerifyPaymentTypes";
import { _AxiosErrorTypes, _AxiosResponseTypes } from "../types/AxiosTypes";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const _Axios = function (
  Method: string,
  URL: string,
  Data: CreatePaymentQuery | VerifyPaymentQuery
) {
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

  return new Promise<any>((resolve, reject) => {
    axios(config)
      .then((res: AxiosResponse<_AxiosResponseTypes>) => {
        const {
          id,
          link,
          status,
          track_id,
          order_id,
          amount,
          date,
          payment,
          verify,
        } = res.data;

        switch (URL) {
          case Config.API.CreatePayment:
            resolve({ ID: id, Link: link });
            break;
          case Config.API.VerifyPayment:
            const message = VerifyPaymentStatusCodes[status] || "N/A";

            if (message !== "N/A") {
              resolve(message);
            } else {
              resolve({
                Status: status,
                TrackID: track_id,
                ID: id,
                Order_ID: order_id,
                Amount: amount,
                Date: date,
                Payment: {
                  TrackID: payment.track_id,
                  CardNo: payment.card_no,
                  HashedCardNo: payment.hashed_card_no,
                  Date: payment.date,
                },
                Verify: { Date: verify.date },
              });
            }
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
