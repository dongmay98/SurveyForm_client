import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  Header,
  HeadTitle,
  HeadExplain,
} from "../../../components/header/HeaderStyle";
import {
  Main,
  MainList,
  TitleSelect,
  TitleInput,
} from "../../../components/main/mainSurvey";
import { QUESTION_TYPE } from "QuestionType";
import { ShortOption } from "../ShortOption/ShortOption";
import MultiplePreview from "./MultiplePreview/MultiplePreview";
import CheckboxPreview from "./CheckBoxPreview/CheckBoxPreview";
import ShortPreview from "./ShortPreview/ShortPreview";

const PreviewContainer = styled.div`
  width: 100%;
  background-color: white;
`;

const SurveyPreview = () => {
  const survey = useSelector((state: RootState) => state.survey);
  const { questions } = survey;

  return (
    <>
      <PreviewContainer>
        <Header>
          <HeadTitle value={survey.surveyTitle} readOnly />
          <HeadExplain value={survey.desc} readOnly />
        </Header>
        {questions.map((_, index) => {
          return (
            <Main key={index}>
              <MainList>
                <TitleSelect>
                  <TitleInput
                    type="text"
                    value={questions[index].questionTitle}
                    readOnly
                  />
                </TitleSelect>
                {(() => {
                  switch (questions[index].type) {
                    case QUESTION_TYPE.SHORT:
                      return <ShortPreview questionIndex={index} />;
                    case QUESTION_TYPE.MULTIPLE:
                      return <MultiplePreview questionIndex={index} />;
                    case QUESTION_TYPE.CHECKBOX:
                      return <CheckboxPreview questionIndex={index} />;
                    default:
                      return null;
                  }
                })()}
              </MainList>
            </Main>
          );
        })}
        <button>제출</button>
      </PreviewContainer>
    </>
  );
};

export default SurveyPreview;
