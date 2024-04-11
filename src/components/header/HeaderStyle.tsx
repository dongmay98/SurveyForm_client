import styled from "styled-components";

const Header = styled.header`
  margin-top: 20px;
  width: 100%;
  height: 160px;
  border-width: 10px 1px 1px;
  border-style: solid;
  border-color: orange lightgrey lightgrey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
`;

const HeadTitle = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding: 5px;
  font-size: 24px;
  border-bottom: 1px solid orange;
`;

const HeadExplain = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding: 5px;
  font-size: 16px;
`;
export { Header, HeadTitle, HeadExplain };
