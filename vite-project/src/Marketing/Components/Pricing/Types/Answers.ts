type Answers = {
  services: string[];
  industry?: string;
  country?: string;
  company_size?: string;
  market?: string;
  solution?: string;
  selling_price?: string;
  conversion?: string;
  [key: string]: string | string[] | undefined;
};


export type {Answers as default}