import styled, { css } from "styled-components";

interface BasicBtnProps {
  wid?: string;
  bgcolor?: string;
  round?: string;
  shadow?: string;
  weight?: string;
  linestyle?: boolean;
  xsm?: boolean;
  sm?: boolean;
  md?: boolean;
}

const BasicBtn = styled.button<BasicBtnProps>`
  width: ${(props) => props.wid || "auto"};
  height: 70px;
  padding: 0 15px;
  background-color: ${(props) => props.bgcolor || "#fff"};
  justify-content: center;
  text-align: center;
  font-size: 20px;
  border-radius: ${(props) => props.round || "10px"};
  box-shadow: ${(props) =>
    props.shadow || "0px 0px 4px 0px rgba(0, 0, 0, 0.25)"};
  font-weight: ${(props) => props.weight || "normal"};
  cursor: pointer;

  &:hover {
    border: 1px solid orange;
    background-color: orange;
  }
  ${(props) =>
    props.linestyle &&
    css`
      color: #555;
      background-color: #fff;
      border: 1px solid #d9d9d9;
    `}
  ${(props) =>
    props.xsm &&
    css`
      height: 24px;
      font-size: 12px;
    `}
  ${(props) =>
    props.sm &&
    css`
      height: 24px;
      font-size: 12px;
    `}
  ${(props) =>
    props.md &&
    css`
      height: 45px;
      font-size: 14px;
    `}
  &:disabled {
    background-color: #d3d3d3;
    color: #fff;
  }
`;

export { BasicBtn };
