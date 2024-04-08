import styled from "styled-components";

const ShortAnswer = styled.p`
  font-size: 14px;
  color: grey;
  padding: 5px;
  border-bottom: 1px dotted grey;
  user-select: none;
  margin-left: 5px;
  margin-top: 8px;
`;
const ShortOption = ({ questionIndex }: { questionIndex: number }) => {
  return <ShortAnswer>단답형 텍스트</ShortAnswer>;
};

export { ShortOption, ShortAnswer };
