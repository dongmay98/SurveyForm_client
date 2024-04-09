import { useSelector } from "react-redux";
import Modal from "react-modal";
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
import MultiplePreview from "./MultiplePreview/MultiplePreview";
import CheckboxPreview from "./CheckBoxPreview/CheckBoxPreview";
import ShortPreview from "./ShortPreview/ShortPreview";
import { modalStyles } from "./PreviewModalStyle";
import axios from "axios";

Modal.setAppElement("#root");

interface PreviewModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const SurveyPreview: React.FC<PreviewModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const survey = useSelector((state: RootState) => state.survey);
  const { questions } = survey;

  const handleSubmit = async () => {
    try {
      // 요청본문에 surveyData를 추가
      const response = await axios.post(
        "http://localhost:8080/submit-survey",
        {
          surveyData: {
            surveyTitle: survey.surveyTitle,
            surveyDescription: survey.desc,
            questions: questions.map((question, index) => ({
              questionTitle: question.questionTitle,
              questionType: question.type,
              selectedOptions: survey.selectedOptions.filter(
                (option) => option.questionIndex === index
              ),
            })),
          },
        },
        {
          withCredentials: true,
        }
      );

      console.log(response.data.message);
      onRequestClose();
    } catch (error) {
      console.error("Error submitting survey:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyles}>
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
      <button onClick={onRequestClose}>닫기</button>
      <button style={{ marginLeft: "5px" }} onClick={handleSubmit}>
        제출
      </button>
    </Modal>
  );
};

export default SurveyPreview;
