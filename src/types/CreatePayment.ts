export type CreatePayment = {
  Name?: String;
  Mail?: String;
  Phone?: String;
  Amount: Number;
  Order_ID: String;
  Description?: String;
  CallBackURL: String;
};

export type Query = {
  name: String;
  mail: String;
  phone: String;
  amount: Number;
  order_id: String;
  desc: String;
  callback: String;
};
