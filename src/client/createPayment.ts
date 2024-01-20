import { CreatePayment, Query } from "../types/CreatePaymentTypes";
import { Config } from "../config";
import { IDPay } from "./client";
import { AxiosResponse } from "axios";

export const createPayment = function (
  this: IDPay,
  input: CreatePayment
): Promise<AxiosResponse> {
  const { Name, Mail, Phone, Amount, Order_ID, Description, CallBackURL } =
    input;

  const Query: Query = {
    name: Name ?? undefined,
    mail: Mail ?? undefined,
    phone: Phone ?? undefined,
    amount: Amount,
    order_id: Order_ID,
    desc: Description ?? undefined,
    callback: CallBackURL,
  };

  return this._Axios("POST", Config.API.CreatePayment, Query);
};
