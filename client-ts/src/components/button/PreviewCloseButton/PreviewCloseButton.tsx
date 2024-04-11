import styled from "styled-components";

const StyledCloseButton = styled.button`
  background-color: lightgray;
  border: none;
  color: #333;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return <StyledCloseButton onClick={onClick}>닫기</StyledCloseButton>;
};

export default CloseButton;
