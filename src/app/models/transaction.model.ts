

export interface TransactionResult{
	status: string;
  message: string;
  data: any;
}

export interface TransactionHistory{
  transaction_date : string;
  transaction_status: string;
  product_amount: Number;
  customer_id: String;
  amount_charged: Number;
}
