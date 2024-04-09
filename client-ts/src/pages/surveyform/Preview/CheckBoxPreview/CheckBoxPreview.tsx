import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { OptionContainer } from "../../../../components/main/mainSurvey";
import { selectMultipleOptions } from "../../../../store/surveySlice";

const CheckboxOptionPreview = ({
  questionIndex,
}: {
  questionIndex: number;
}) => {
  const dispatch = useDispatch();
  const { questions, selectedOptions } = useSelector(
    (state: RootState) => state.survey
  );
  const options = questions[questionIndex].options || [];

  const handleOptionChange = (value: string) => {
    dispatch(selectMultipleOptions({ questionIndex, value }));
    console.log(selectedOptions);
  };

  return (
    <OptionContainer>
      {options.map((option, optionIndex) => (
        <div
          key={optionIndex}
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <input
            type="checkbox"
            id={`question-${questionIndex}-option-${optionIndex}`}
            value={option}
            checked={selectedOptions.some(
              (selectedOption) =>
                selectedOption.questionIndex === questionIndex &&
                selectedOption.value === option
            )}
            onChange={() => handleOptionChange(option)}
          />
          <label htmlFor={`question-${questionIndex}-option-${optionIndex}`}>
            {option}
          </label>
        </div>
      ))}
    </OptionContainer>
  );
};

export default CheckboxOptionPreview;
