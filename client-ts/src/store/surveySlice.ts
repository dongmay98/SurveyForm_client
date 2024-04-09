import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question, QUESTION_TYPE, QUESTION_TYPE_ARRAY } from "../QuestionType";

export interface SelectedOption {
  questionIndex: number;
  value: string;
}
export interface surveyState {
  surveyTitle: string;
  desc: string;
  questions: Question[];
  selectedOptions: SelectedOption[];
}

const initialState: surveyState = {
  surveyTitle: "설문지 제목",
  desc: "설문지 설명",
  questions: [
    {
      questionTitle: "제목 없는 질문",
      type: QUESTION_TYPE.MULTIPLE,
      required: true,
      options: ["옵션1"],
    },
  ],
  selectedOptions: [],
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    // 설문지의 제목 업데이트
    setTitle(state, action: PayloadAction<{ surveyTitle: string }>) {
      state.surveyTitle = action.payload.surveyTitle;
    },

    // 설문지의 설명 업데이트
    setDesc(state, action: PayloadAction<{ desc: string }>) {
      state.desc = action.payload.desc;
    },

    // 질문의 제목 업데이트
    setQuestionTitle(
      state,
      action: PayloadAction<{ questionIndex: number; questionTitle: string }>
    ) {
      state.questions[action.payload.questionIndex].questionTitle =
        action.payload.questionTitle;
      console.log(action.payload.questionTitle);
    },

    // 질문의 유형 업데이트
    setQuestionType(
      state,
      action: PayloadAction<{ questionIndex: number; type: string }>
    ) {
      const { questionIndex, type } = action.payload;
      state.questions[action.payload.questionIndex].type = type;

      // 질문 유형에 따라 초깃값 설정
      switch (type) {
        case QUESTION_TYPE.SHORT:
          state.questions[questionIndex].text = "단답형 텍스트";
          console.log(type);
          return;

        case QUESTION_TYPE.MULTIPLE:
          state.questions[questionIndex].options = ["옵션1"];
          console.log(type);
          return;

        case QUESTION_TYPE.CHECKBOX:
          state.questions[questionIndex].options = ["옵션1"];
          console.log(type);
          return;
      }
    },

    // 질문(객관식, 체크박스, 드롭다운 유형) option 업데이트
    setQuestionOptionText(
      state,
      action: PayloadAction<{
        questionIndex: number;
        optionIndex: number;
        text: string;
      }>
    ) {
      const { questionIndex, optionIndex, text } = action.payload;
      state.questions[questionIndex].options![optionIndex] = text;
      console.log(text, optionIndex, questionIndex);
    },

    // 질문(객관식, 체크박스, 드롭다운 유형) option 추가
    addQuestionOption(state, action: PayloadAction<{ questionIndex: number }>) {
      const questionIndex = action.payload.questionIndex;
      const newIndex =
        Number(state.questions[questionIndex].options!.length) + 1;
      const initialValue = `옵션${newIndex}`;

      state.questions[questionIndex].options!.push(initialValue);
    },

    // 질문(객관식, 체크박스, 드롭다운 유형) option 삭제
    deleteQuestionOption(
      state,
      action: PayloadAction<{ questionIndex: number; optionIndex: number }>
    ) {
      const { questionIndex, optionIndex } = action.payload;
      state.questions[questionIndex].options!.splice(optionIndex, 1);
    },

    // 질문 복사
    copyQuestion(
      state,
      action: PayloadAction<{
        questionIndex: number;
      }>
    ) {
      const questionIndex = action.payload.questionIndex;
      const copiedQuestion = state.questions[questionIndex];

      const newQuestion = {
        ...copiedQuestion,
      };

      state.questions.splice(questionIndex + 1, 0, newQuestion);
    },

    // 질문 삭제
    deleteQuestion(state, action: PayloadAction<{ questionIndex: number }>) {
      state.questions.splice(action.payload.questionIndex, 1);
    },

    // 질문 추가 (객관식으로 추가)
    addQuestion(state) {
      const newQuestion = {
        questionTitle: "제목 없는 질문",
        type: QUESTION_TYPE.MULTIPLE,
        required: true,
        options: ["옵션1"],
      };

      state.questions.push(newQuestion);
    },

    // 단답형 질문의 답변 업데이트
    setShortAnswer(
      state,
      action: PayloadAction<{ questionIndex: number; text: string }>
    ) {
      state.questions[action.payload.questionIndex].text = action.payload.text;
    },
    selectOption: (state, action: PayloadAction<SelectedOption>) => {
      const { questionIndex, value } = action.payload;
      const index = state.selectedOptions.findIndex(
        (option) => option.questionIndex === questionIndex
      );
      if (index > -1) {
        state.selectedOptions[index].value = value;
      } else {
        state.selectedOptions.push({ questionIndex, value });
      }
    },
    selectMultipleOptions: (state, action: PayloadAction<SelectedOption>) => {
      const { questionIndex, value } = action.payload;
      const index = state.selectedOptions.findIndex(
        (option) =>
          option.questionIndex === questionIndex && option.value === value
      );
      if (index > -1) {
        state.selectedOptions.splice(index, 1);
      } else {
        state.selectedOptions.push({ questionIndex, value });
      }
    },
  },
});

export const {
  setTitle,
  setDesc,
  setQuestionTitle,
  setQuestionType,
  setQuestionOptionText,
  addQuestionOption,
  deleteQuestionOption,
  copyQuestion,
  deleteQuestion,
  addQuestion,
  selectOption,
  selectMultipleOptions,
} = surveySlice.actions;
