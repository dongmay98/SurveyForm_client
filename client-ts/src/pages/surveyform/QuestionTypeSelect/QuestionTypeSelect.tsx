import { useDispatch } from "react-redux";
import { setQuestionType } from "../../../store/surveySlice";
import styled from "styled-components";
import { QUESTION_TYPE } from "../../../QuestionType";
import { useAppSelector } from "store";

const StyledCaseSelect = styled.select`
  position: relative;
  font-size: 14px;
  bottom: 5px;
  padding: 3px;
  width: 250px;
  height: 50px;
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;

interface QuestionTypeSelectProps {
  questionIndex: number;
}

const QuestionTypeSelect = ({ questionIndex }: QuestionTypeSelectProps) => {
  const dispatch = useDispatch();
  const checkedType = useAppSelector(
    (state) => state.survey.questions[questionIndex].type
  );
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(questionIndex);
    dispatch(
      setQuestionType({ questionIndex, type: e.target.value })
    );
  };

  return (
    <StyledCaseSelect value={checkedType} onChange={handleChange}>
      <option value={QUESTION_TYPE.SHORT}>단답형</option>
      <option value={QUESTION_TYPE.MULTIPLE}>객관식</option>
      <option value={QUESTION_TYPE.CHECKBOX}>체크박스</option>
    </StyledCaseSelect>
  );
};

export default QuestionTypeSelect;
