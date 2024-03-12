import { Routes, Route, useLocation } from 'react-router-dom';
import JoinPg from "./pages/join/Join.jsx";
import LoginPage from './pages/login/Login.jsx';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/join" element={<JoinPg />} />
    </Routes>
    </>
  );
}
export default App;