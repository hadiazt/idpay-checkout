export type _AxiosErrorTypes = {
  error_code: number;
  error_message: string;
};

export type _AxiosResponseTypes = {
  id: string;
  link: string;
  status: string;
  track_id: string;
  order_id: 101;
  amount: number;
  date: string;
  payment: {
    track_id: string;
    amount: number;
    card_no: string;
    hashed_card_no: string;
    date: string;
  };
  verify: {
    date: string;
  };
};
