import type QuestionOption from "./QuestionOption";


type Question = {
  id: string;
  title: string;
  subtitle: string;
  type?: "multi" | "number";
  options?: QuestionOption[];
  conditional?: boolean;
  placeholder?: string;
};


export type {Question as default}