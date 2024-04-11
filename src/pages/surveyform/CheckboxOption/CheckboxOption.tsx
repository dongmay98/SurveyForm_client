import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  addQuestionOption,
  setQuestionOptionText,
} from "../../../store/surveySlice";
import {
  AddOptionButton,
  OptionContainer,
  OptionInput,
} from "../../../components/main/mainSurvey";
import OptionDeleteButton from "../../../components/button/DeleteOptionButton";

const CheckboxOption = ({ questionIndex }: { questionIndex: number }) => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state: RootState) => state.survey);
  const options = questions[questionIndex].options || [];

  const handleOptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    optionIndex: number
  ) => {
    dispatch(
      setQuestionOptionText({
        questionIndex,
        optionIndex,
        text: e.target.value,
      })
    );
  };

  const handleAddOption = () => {
    dispatch(addQuestionOption({ questionIndex }));
  };

  return (
    <>
      <OptionContainer>
        {options.map((option, optionIndex) => (
          <div
            key={optionIndex}
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            <OptionInput
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(e, optionIndex)}
              style={{ flexGrow: 1 }}
            />
            <OptionDeleteButton
              questionIndex={questionIndex}
              optionIndex={optionIndex}
            />
          </div>
        ))}
      </OptionContainer>
      <AddOptionButton onClick={handleAddOption}>옵션 추가</AddOptionButton>
    </>
  );
};

export default CheckboxOption;
