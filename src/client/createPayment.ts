import { CreatePayment, Query } from "../types/CreatePayment";
import { Config } from "../config";
import { IDPay } from "./client";

export const createPayment = async function (this: IDPay, input: CreatePayment) {
  var Query: Query = {
    name: input.Name ?? undefined,
    mail: input.Mail ?? undefined,
    phone: input.Phone ?? undefined,
    amount: input.Amount,
    order_id: input.Order_ID,
    desc: input.Description ?? undefined,
    callback: input.CallBackURL,
  };

  this._Axios("POST", Config.API.CreatePayment, Query);
};
