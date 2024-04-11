// OptionDeleteButton.tsx
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteQuestionOption } from "../../store/surveySlice";

interface OptionDeleteButtonProps {
  questionIndex: number;
  optionIndex: number;
}

const DeleteButton = styled.button`
  border: none;
  width: 60px;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  color: gray;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: orange;
    color: white;
  }
`;

const OptionDeleteButton: React.FC<OptionDeleteButtonProps> = ({
  questionIndex,
  optionIndex,
}) => {
  const dispatch = useDispatch();

  const handleDeleteOption = () => {
    dispatch(deleteQuestionOption({ questionIndex, optionIndex }));
  };

  return <DeleteButton onClick={handleDeleteOption}>삭제</DeleteButton>;
};

export default OptionDeleteButton;
