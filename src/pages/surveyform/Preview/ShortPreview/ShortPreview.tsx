import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import styled from "styled-components";
import { setShortAnswer } from "../../../../store/surveySlice";

const ShortAnswerPreview = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 5px;
  color: gray;
  margin-left: 5px;
  margin-top: 8px;
  border: none;
`;

const ShortPreview = ({ questionIndex }: { questionIndex: number }) => {
  const dispatch = useDispatch();
  const survey = useSelector((state: RootState) => state.survey);
  const { questions } = survey;
  const text = questions[questionIndex].text || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setShortAnswer({ questionIndex, text: e.target.value }));
    console.log(text);
  };

  return (
    <ShortAnswerPreview
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="단답형 답변"
    />
  );
};

export default ShortPreview;
