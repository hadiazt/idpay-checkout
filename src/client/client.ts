import { Config } from "../config";
import { CreatePayment, Query } from "../types/CreatePaymentTypes";
import { createPayment } from "./createPayment";
import { _Axios } from "./axiosHelper";
import { AxiosResponse } from "axios";

export class IDPay {
  CreatePayment: (input: CreatePayment) => Promise<AxiosResponse>;
  protected _Axios: (method: string, url: string, data: Query) => Promise<AxiosResponse>;
  protected API_KEY: string;
  protected SandBox: boolean;

  constructor(API_KEY: string, SandBox: boolean) {
    if (
      !API_KEY ||
      API_KEY.length !== Config.API_KEYLength ||
      typeof API_KEY !== "string"
    ) {
      throw new Error(
        "Invalid API KEY. Please obtain a valid API key from " + Config.Doc.KEY
      );
    }

    if (typeof SandBox !== "boolean") {
      throw new Error(
        "Invalid SandBox parameter. It must be a boolean value (true/false)."
      );
    }

    this.API_KEY = API_KEY;
    this.SandBox = SandBox;
    this._Axios = _Axios.bind(this);
  }
}

IDPay.prototype.CreatePayment = createPayment;
