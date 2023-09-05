

export interface TransactionResult{
	status: string;
  message: string;
  data: any;
}

export interface TransactionHistory{
  transaction_date : string;
  transaction_status: string;
  product_amount: Number;
  request_id: string;
  customer_id: string;
  amount_charged: Number;
  product_description: string;
}
