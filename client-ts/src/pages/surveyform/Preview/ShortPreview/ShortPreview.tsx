import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import styled from "styled-components";

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
  const survey = useSelector((state: RootState) => state.survey);
  const { questions } = survey;
  const options = questions[questionIndex].options || [];

  return <ShortAnswerPreview type="text" value={"단답형 답변"} />;
};

export default ShortPreview;
