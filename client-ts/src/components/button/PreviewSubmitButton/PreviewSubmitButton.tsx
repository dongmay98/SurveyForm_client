import styled from "styled-components";

const StyledSubmitButton = styled.button`
  background-color: orange;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return <StyledSubmitButton onClick={onClick}>제출</StyledSubmitButton>;
};

export default SubmitButton;
