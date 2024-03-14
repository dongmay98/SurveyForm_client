import { Routes, Route, useLocation } from 'react-router-dom';
import JoinPg from "./pages/join/Join.jsx";
import LoginPage from './pages/login/Login.jsx';
import Mainservey from './pages/serveyform/Mainservey.jsx'
import { Reset } from 'styled-reset'

function App() {
  return (
    <>
    <Reset />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/join" element={<JoinPg />} />
      <Route path="/main" element={<Mainservey />} />
    </Routes>
    </>
  );
}
export default App;