export type InvoiceForm = {
  id: string;
  Title: string;
  Subject: string;
  amount: number;
  Status: string;
  Date: Date;
} | null;

export type State = {
  errors?: {
    Title?: string[];
    Subject?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
