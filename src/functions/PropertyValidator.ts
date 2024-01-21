import { PropertyLengthConstraints } from "../types/CreatePaymentTypes";
import { Logger } from "./Logger";

export const validatePropertyLength = (
  value: string | number,
  constraints: PropertyLengthConstraints,
  propertyName: string,
  propertyType: string | number,
  Type: StringConstructor | NumberConstructor
): void => {
  if (!constraints.Optional && !value) {
    Logger(`${propertyName} Is Required`);
  } else if (value) {
    console.log(value);
    
    // console.log(expectedType);
    // if (value.constructor !== expectedType) {
    //   Logger(`${propertyName} Type Is Wrong\nIt Should Be ${typeof expectedType}`);
    // }
    // value = value.toString();
    // console.log(value);
    // if (
    //   value.length > constraints.MaxLength ||
    //   value.length < constraints.MinLength
    // ) {
    //   Logger(
    //     `${propertyName} Has Invalid Entry\nIt Must Be From ${constraints.MinLength} To ${constraints.MaxLength} Length`
    //   );
    // }
  }
};
