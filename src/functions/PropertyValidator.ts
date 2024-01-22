import { PropertyLengthConstraints } from "../types/CreatePaymentTypes";
import { Logger } from "./Logger";

export const validatePropertyLength = (
  value: string | number,
  constraints: PropertyLengthConstraints,
  propertyName: string,
  propertyType: string | number,
  Type: StringConstructor | NumberConstructor
): void => {
  if (!value && !constraints.Optional) {
    Logger(`${propertyName} Is Required`);
  }

  if (value) {
    if (typeof value !== typeof Type()) {
      Logger(
        `${propertyName} Has Invalid Entry Type\nIt Must Be ${typeof Type()}`
      );
    }

    if (typeof value === "number" && value < constraints.MinLength) {
      Logger(
        `${propertyName} Has Invalid Entry\nIt Must Be From ${constraints.MinLength} To ${constraints.MaxLength} Length`
      );
    }

    if (
      typeof value === "string" &&
      (value.length > constraints.MaxLength ||
        value.length < constraints.MinLength)
    ) {
      Logger(
        `${propertyName} Has Invalid Entry\nIt Must Be From ${constraints.MinLength} To ${constraints.MaxLength} Length`
      );
    }

    return;
  }
};
