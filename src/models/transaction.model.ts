import { TransactionStatus, TransactionOrigin } from 'enums/transaction.enum';

export interface ITransaction {
  objectType: string;
  objectId: string;
  timestamp: string;
  status: TransactionStatus;
  details: ITransactionDetails;
}
// ----------------------

export interface ITransactionDetails {
  origin: TransactionOrigin;
}
// ----------------------

export interface ITransactionGroup {
  key: string;
  data: ITransaction[];
}
// -----------------------------------------------------------------------
