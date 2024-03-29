import { AddOptionButton, OptionContainer } from "components/main/mainSurvey";

const MultipleOption = ({ questionIndex }:{ questionIndex : number}) => {

  return (
    <>
      <OptionContainer>
        {/* 옵션 렌더링 */}
      </OptionContainer>
      <AddOptionButton>옵션 추가</AddOptionButton>
    </>
  );
};

export default MultipleOption ;