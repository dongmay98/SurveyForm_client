import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import {ActionButton,AddOptionButton,CaseSelect,CopyPasteContainer,DeleteOptionButton,Main,MainList,OptionContainer,OptionInput,TitleInput,TitleSelect} from '../../../components/main/mainSurvey'
import QuestionTypeSelect from '../QuestionTypeSelect/QuestionTypeSelect';
import { QUESTION_TYPE } from 'QuestionType';
import ShortOption from '../ShortOption/ShortOption';
import MultipleOption from '../MultipleOption/MultipleOption';
import CheckboxOption from '../CheckboxOption/CheckboxOption';

export default function MainContainer() {
  const dispatch = useDispatch();
  const survey = useSelector((state: RootState) => state.survey);
  const { questions } = survey;
  const currentQuestion = questions[0];


  return (
      <Main>
      <MainList>
        <TitleSelect>
          <TitleInput type="text" placeholder="질문 제목" value={currentQuestion.questionTitle} />
          <QuestionTypeSelect questionIndex={0} />
        </TitleSelect>
        {currentQuestion.type === QUESTION_TYPE.SHORT && <ShortOption questionIndex={0} />}
        {currentQuestion.type === QUESTION_TYPE.MULTIPLE && <MultipleOption questionIndex={0} />}
        {currentQuestion.type === QUESTION_TYPE.CHECKBOX && <CheckboxOption questionIndex={0} />}
        <CopyPasteContainer>
          <ActionButton>복사</ActionButton>
          <ActionButton>삭제</ActionButton>
        </CopyPasteContainer>
      </MainList>
    </Main>
  );
}