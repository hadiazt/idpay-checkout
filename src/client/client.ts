import { Config } from "../config";
import { CreatePayment, Query } from "../types/CreatePaymentTypes";
import { createPayment } from "./createPayment";
import { _Axios } from "./axiosHelper";

export class IDPay {
  CreatePayment: (input: CreatePayment) => Promise<any>;
  protected _Axios: (method: string, url: string, data: Query) => Promise<any>;
  protected API_KEY: string;
  protected SandBox: boolean;

  constructor(apiKey: string, sandbox: boolean) {
    if (
      !apiKey ||
      apiKey.length !== Config.API_KEYLength ||
      typeof apiKey !== "string"
    ) {
      throw new Error(
        "Invalid API KEY. Please obtain a valid API key from " + Config.Doc.KEY
      );
    }

    if (typeof sandbox !== "boolean") {
      throw new Error(
        "Invalid SandBox parameter. It must be a boolean value (true/false)."
      );
    }

    this.API_KEY = apiKey;
    this.SandBox = sandbox;
    this._Axios = _Axios.bind(this);
  }
}

IDPay.prototype.CreatePayment = createPayment;
