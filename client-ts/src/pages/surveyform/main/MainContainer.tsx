import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import {
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
} from '../../../store/surveySlice';
import {ActionButton,AddOptionButton,CaseSelect,CopyPasteContainer,DeleteOptionButton,Main,MainList,OptionContainer,OptionInput,TitleInput,TitleSelect} from '../../../components/main/mainSurvey'

export default function MainContainer() {
  const dispatch = useDispatch();
  // 스토어의 survey 상태를 선택하기 위해 RootState 타입을 사용합니다.
  const survey = useSelector((state: RootState) => state.survey);

  return (
      <Main>
      <MainList>
        <TitleSelect>
          <TitleInput type="text" placeholder="질문 제목" />
          <CaseSelect>
            <option value="단답형">단답형</option>
            <option value="객관식">객관식</option>
            <option value="체크박스">체크박스</option>
          </CaseSelect>
        </TitleSelect>
        <OptionContainer>
          <li>
            <OptionInput type="text" />
            <DeleteOptionButton>X</DeleteOptionButton>
          </li>
          <AddOptionButton type="button">옵션 추가</AddOptionButton>
        </OptionContainer>
        <CopyPasteContainer>
          <ActionButton>복사</ActionButton>
          <ActionButton>삭제</ActionButton>
        </CopyPasteContainer>
      </MainList>
    </Main>
  );
}