import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { OptionContainer } from "../../../../components/main/mainSurvey";
import { selectOption } from "store/surveySlice";

const MultipleOptionPreview = ({
  questionIndex,
}: {
  questionIndex: number;
}) => {
  const dispatch = useDispatch();
  const { questions, selectedOptions } = useSelector(
    (state: RootState) => state.survey
  );
  const options = questions[questionIndex].options || [];

  const handleOptionChange = (optionIndex: number, value: string) => {
    dispatch(selectOption({ questionIndex, optionIndex, value }));
  };

  return (
    <OptionContainer>
      {options.map((option, optionIndex) => (
        <div
          key={optionIndex}
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <input
            type="radio"
            id={`question-${questionIndex}-option-${optionIndex}`}
            name={`question-${questionIndex}`}
            value={option}
            checked={selectedOptions.some(
              (selectedOption) =>
                selectedOption.questionIndex === questionIndex &&
                selectedOption.optionIndex === optionIndex
            )}
            onChange={() => handleOptionChange(optionIndex, option)}
          />
          <label htmlFor={`question-${questionIndex}-option-${optionIndex}`}>
            {option}
          </label>
        </div>
      ))}
    </OptionContainer>
  );
};

export default MultipleOptionPreview;
