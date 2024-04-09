import styled from "styled-components";

export const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "600px",
    width: "100%",
    maxHeight: "90%", // 모달의 최대 높이를 화면의 80%로 제한
    overflow: "auto", // 내용이 넘칠 경우 스크롤 표시
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};
export const PreviewContent = styled.div`
  max-height: 100vh; // 내용의 최대 높이를 뷰포트 높이의 60%로 제한
  overflow-y: auto; // 세로 스크롤 표시
`;
