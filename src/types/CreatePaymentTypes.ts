export type CreatePaymentTypes = {
  Name?: string;
  Mail?: string;
  Phone?: string;
  Amount: number;
  Order_ID: string;
  Description?: string;
  CallBackURL: string;
};

export const _CreatePaymentTypes = {
  Name: String,
  Mail: String,
  Phone: String,
  Amount: Number,
  Order_ID: String,
  Description: String,
  CallBackURL: String,
};

export type CreatePaymentQuery = {
  name: string;
  mail: string;
  phone: string;
  amount: number;
  order_id: string;
  desc: string;
  callback: string;
};

export type PropertyLengthConstraints = {
  MinLength: number;
  MaxLength: number;
  Optional: boolean;
};

export const propertyLengthConstraints: Partial<
  Record<keyof CreatePaymentTypes, PropertyLengthConstraints>
> = {
  Name: { MinLength: 0, MaxLength: 255, Optional: true },
  Mail: { MinLength: 0, MaxLength: 255, Optional: true },
  Phone: { MinLength: 11, MaxLength: 11, Optional: true },
  Order_ID: { MinLength: 1, MaxLength: 50, Optional: false },
  Description: { MinLength: 0, MaxLength: 255, Optional: true },
  CallBackURL: { MinLength: 10, MaxLength: 2048, Optional: false },
  Amount: {
    MinLength: 1000,
    MaxLength: 500000000,
    Optional: false,
  },
};
