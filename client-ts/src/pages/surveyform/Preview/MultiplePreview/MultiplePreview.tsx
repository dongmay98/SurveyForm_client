import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import {
  OptionContainer,
  OptionInput,
} from "../../../../components/main/mainSurvey";

const MultipleOptionPreview = ({
  questionIndex,
}: {
  questionIndex: number;
}) => {
  const { questions } = useSelector((state: RootState) => state.survey);
  const options = questions[questionIndex].options || [];

  return (
    <OptionContainer style={{ marginTop: "10px" }}>
      {options.map((option, optionIndex) => (
        <div
          key={optionIndex}
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <OptionInput type="text" value={option} readOnly />
        </div>
      ))}
    </OptionContainer>
  );
};

export default MultipleOptionPreview;
