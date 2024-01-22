import { IDPay } from "../client";
import { Config } from "../../config";
import { AxiosResponse } from "axios";
import {
  CreatePaymentTypes,
  CreatePaymentQuery,
  _CreatePaymentTypes,
  propertyLengthConstraints,
} from "../../types/CreatePaymentTypes";
import { validateProperty } from "../../functions/PropertyValidator";

export const createPayment = function (
  this: IDPay,
  input: CreatePaymentTypes
): Promise<AxiosResponse> {
  const Query: CreatePaymentQuery = {
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
    const PaymentType =
      _CreatePaymentTypes[propertyName as keyof CreatePaymentTypes];

    validateProperty(
      propertyValue,
      propertyName,
      typeof PaymentType(),
      constraints
    );
  }

  return this._Axios("POST", Config.API.CreatePayment, Query);
};
