import {
  CreatePaymentTypes,
  Query,
  _CreatePaymentTypes,
  propertyLengthConstraints,
} from "../types/CreatePaymentTypes";
import { Config } from "../config";
import { IDPay } from "./client";
import { AxiosResponse } from "axios";
import { validatePropertyLength } from "../functions/PropertyValidator";

export const createPayment = function (
  this: IDPay,
  input: CreatePaymentTypes
): Promise<AxiosResponse> {
  const Query: Query = {
    name: input.Name ?? undefined,
    mail: input.Mail ?? undefined,
    phone: input.Phone ?? undefined,
    amount: input.Amount,
    order_id: input.Order_ID,
    desc: input.Description ?? undefined,
    callback: input.CallBackURL,
  };

  for (const propertyName in propertyLengthConstraints) {
    const constraints =
      propertyLengthConstraints[propertyName as keyof CreatePaymentTypes];
    const propertyValue = input[propertyName as keyof CreatePaymentTypes];
    const propertyType = typeof propertyValue;
    const PaymentType =
      _CreatePaymentTypes[propertyName as keyof CreatePaymentTypes];
    validatePropertyLength(
      propertyValue,
      constraints,
      propertyName,
      propertyType,
      PaymentType
    );
  }

  return this._Axios("POST", Config.API.CreatePayment, Query);
};
