import { Config } from "../config";
import { AxiosResponse } from "axios";
import { Logger } from "../functions/Logger";
import { _Axios } from "../functions/axiosHelper";
import { createPayment } from "./Payment/createPayment";
import { verifyPayment } from "./Payment/verifyPayment";
import { CreatePaymentTypes } from "../types/CreatePaymentTypes";
import { VerifyPaymentTypes } from "../types/VerifyPaymentTypes";

export class IDPay {
  /**
   * Create CreatePayment object. Wrapper around constructor.
   * @param  {String} Name [Optional]
   * @param  {String} Mail [Optional]
   * @param  {String} Phone [Optional]
   * @param  {number} Amount [Required]
   * @param  {String} Order_ID [Required]
   * @param  {String} Description [Optional]
   * @param  {String} CallBackURL [Required]
   * @returns {Promise<AxiosResponse>} A promise that resolve the response.
   */
  CreatePayment: (input: CreatePaymentTypes) => Promise<AxiosResponse>;
  /**
   * Create VerifyPayment object. Wrapper around constructor.
   * @param  {String} ID [Required]
   * @param  {String} Order_ID [Required]
   * @returns {Promise<AxiosResponse>} A promise that resolve the response.
   */
  VerifyPayment: (input: VerifyPaymentTypes) => Promise<AxiosResponse>;
  protected _Axios: (
    method: string,
    url: string,
    data: object
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
        "Invalid API KEY. Please obtain a valid API key from " + Config.API.KEY
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
IDPay.prototype.VerifyPayment = verifyPayment;
