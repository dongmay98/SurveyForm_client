// Question type 정의
export type Question = {
  questionTitle: string;
  type: string;
  required: boolean;
  text?: string;
  options?: string[];
  textAnswer?: string;
  optionAnswer?: string;
  checkboxAnswer?: boolean[];
};

// QuestionType literal 정의
export const QUESTION_TYPE = {
  SHORT: "단답형",
  MULTIPLE: "객관식",
  CHECKBOX: "체크박스",
} as const;
export const QUESTION_TYPE_ARRAY = [
  "단답형",
  "객관식",
  "체크박스",
] as const;
