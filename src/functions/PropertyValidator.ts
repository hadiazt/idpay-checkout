import { Logger } from "./Logger";
import { PropertyLengthConstraints } from "../types/CreatePaymentTypes";

export const validateProperty = (
  value: string | number,
  propertyName: string,
  Type: string | number,
  constraints?: PropertyLengthConstraints
): void => {
  if ((!constraints && typeof value !== Type) || (value && typeof value !== Type)) {
    Logger(`${propertyName} Has Invalid Entry Type\nIt Must Be ${Type}`);
  }

  if (!constraints) {
    return;
  }

  if (!value && !constraints.Optional) {
    Logger(`${propertyName} Is Required`);
  }

  if (typeof value === "number" && value < constraints.MinLength) {
    Logger(
      `${propertyName} Has Invalid Entry\nIt Must Be From ${constraints.MinLength} To ${constraints.MaxLength} Length`
    );
  }

  if (
    typeof value === "string" &&
    (value.length > constraints.MaxLength || value.length < constraints.MinLength)
  ) {
    Logger(
      `${propertyName} Has Invalid Entry\nIt Must Be From ${constraints.MinLength} To ${constraints.MaxLength} Length`
    );
  }
};
