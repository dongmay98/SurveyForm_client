import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import styled from "styled-components";

const ShortAnswerPreview = styled.input`
  width: 100%;
  font-size: 14px;
  color: grey;
  padding: 5px;
  border-bottom: 1px dotted grey;
  user-select: none;
  margin-left: 5px;
  margin-top: 8px;
`;
const ShortPreview = ({ questionIndex }: { questionIndex: number }) => {
  const survey = useSelector((state: RootState) => state.survey);
  const { questions } = survey;
  const options = questions[questionIndex].options || [];

  return <ShortAnswerPreview type="text" />;
};

export default ShortPreview;
