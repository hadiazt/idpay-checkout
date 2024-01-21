import { Config } from "../config";
import { CreatePaymentTypes, Query } from "../types/CreatePaymentTypes";
import { createPayment } from "./createPayment";
import { _Axios } from "./axiosHelper";
import { AxiosResponse } from "axios";
import { Logger } from "../functions/Logger";

export class IDPay {
  CreatePayment: (input: CreatePaymentTypes) => Promise<AxiosResponse>;
  protected _Axios: (
    method: string,
    url: string,
    data: Query
  ) => Promise<AxiosResponse>;
  protected API_KEY: string;
  protected SandBox: boolean;

  constructor(API_KEY: string, SandBox: boolean) {
    if (
      !API_KEY ||
      API_KEY.length !== Config.API_KEYLength ||
      typeof API_KEY !== "string"
    ) {
      Logger(
        "Invalid API KEY. Please obtain a valid API key from " + Config.Doc.KEY
      );
    }

    if (typeof SandBox !== "boolean") {
      Logger(
        "Invalid SandBox parameter. It must be a boolean value (true/false)."
      );
    }

    this.API_KEY = API_KEY;
    this.SandBox = SandBox;
    this._Axios = _Axios.bind(this);
  }
}

IDPay.prototype.CreatePayment = createPayment;
