import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/index";
import {
  ActionButton,
  CopyPasteContainer,
  Main,
  MainList,
  TitleInput,
  TitleSelect,
} from "../../../components/main/mainSurvey";
import {
  copyQuestion,
  setQuestionTitle,
  deleteQuestion,
} from "../../../store/surveySlice";
import QuestionTypeSelect from "../QuestionTypeSelect/QuestionTypeSelect";
import { QUESTION_TYPE } from "QuestionType";
import { ShortOption } from "../ShortOption/ShortOption";
import MultipleOption from "../MultipleOption/MultipleOption";
import CheckboxOption from "../CheckboxOption/CheckboxOption";

export default function MainContainer() {
  const dispatch = useDispatch();
  const survey = useSelector((state: RootState) => state.survey);
  const { questions } = survey;
  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    dispatch(
      setQuestionTitle({
        questionIndex: index,
        questionTitle: e.target.value,
      })
    );
  };
  const HandleCopyQuestion = (index: number) => {
    dispatch(
      copyQuestion({
        questionIndex: index,
      })
    );
  };
  const handleDeleteQuestion = (index: number) => {
    if (questions.length === 1) {
      return alert("질문은 최소한 한 개 이상을 포함해야 합니다.");
    }
    dispatch(
      deleteQuestion({
        questionIndex: index,
      })
    );
  };

  return (
    <>
      {questions.map((_, index) => {
        return (
          <Main>
            <MainList>
              <TitleSelect>
                <TitleInput
                  type="text"
                  placeholder="질문 제목"
                  value={questions[index].questionTitle}
                  onChange={(e) => handleTitleChange(e, index)}
                />
                <QuestionTypeSelect questionIndex={index} />
              </TitleSelect>
              {(() => {
                switch (questions[index].type) {
                  case QUESTION_TYPE.SHORT:
                    return <ShortOption questionIndex={index} />;
                  case QUESTION_TYPE.MULTIPLE:
                    return <MultipleOption questionIndex={index} />;
                  case QUESTION_TYPE.CHECKBOX:
                    return <CheckboxOption questionIndex={index} />;

                  default:
                    return null;
                }
              })()}
              <CopyPasteContainer>
                <ActionButton onClick={() => HandleCopyQuestion(index)}>
                  복사
                </ActionButton>
                <ActionButton onClick={() => handleDeleteQuestion(index)}>
                  삭제
                </ActionButton>
              </CopyPasteContainer>
            </MainList>
          </Main>
        );
      })}
    </>
  );
}
