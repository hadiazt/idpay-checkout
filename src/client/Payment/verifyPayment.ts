import { IDPay } from "../client";
import { Config } from "../../config";
import { AxiosResponse } from "axios";
import {
  VerifyPaymentQuery,
  VerifyPaymentTypes,
  _VerifyPaymentTypes,
} from "../../types/VerifyPaymentTypes";
import { validateProperty } from "../../functions/PropertyValidator";

export const verifyPayment = function (
  this: IDPay,
  input: VerifyPaymentTypes
): Promise<AxiosResponse> {
  const Query: VerifyPaymentQuery = {
    id: input.ID,
    order_id: input.Order_ID,
  };
  
  for (const propertyName in _VerifyPaymentTypes) {
    const propertyValue = input[propertyName as keyof VerifyPaymentTypes];
    const propertyType =
      _VerifyPaymentTypes[propertyName as keyof VerifyPaymentTypes];

    validateProperty(propertyValue, propertyName, typeof propertyType());
  }

  return this._Axios("POST", Config.API.VerifyPayment, Query);
};
