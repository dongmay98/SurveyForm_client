import { AddOptionButton, OptionContainer } from "components/main/mainSurvey";

const CheckboxOption = ({ questionIndex }:{ questionIndex : number}) => {
  // 이전에 설명한 대로 옵션 추가/삭제/선택 기능 구현
  return (
    <>
      <OptionContainer>
        {/* 옵션 렌더링 */}
      </OptionContainer>
      <AddOptionButton>옵션 추가</AddOptionButton>
    </>
  );
};
export default CheckboxOption;