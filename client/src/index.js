import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { HashRouter } from 'react-router-dom';

const container = document.getElementById("root"); // 컨테이너 가져오기
const root = createRoot(container); // createRoot를 사용하여 루트 생성

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
