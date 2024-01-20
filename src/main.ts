import { IDPay } from "./client/client";

/**
 * Create IDPay object. Wrapper around constructor.
 * @param  {String} API_KEY [Required]
 * @param  {Boolean} SandBox [Required]
 */

export const IDPayClient = (API_KEY: string, SandBox: boolean) => {
  return new IDPay(API_KEY, SandBox);
};
