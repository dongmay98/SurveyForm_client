import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle.tsx";
import Join from "./pages/join/Join.tsx";
import Login from "./pages/login/Login.tsx";
import Surveyform from "./pages/surveyform/Surveyform.tsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/main" element={<Surveyform />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
