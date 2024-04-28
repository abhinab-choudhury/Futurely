import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Features from './pages/Features'
import ErrorPage from './pages/ErrorPage';
import MarriageCallPage from './pages/MarriageCallPage';
import SunSign from './pages/SunSign';
import SunsignHarmonyPage from './pages/SunsignHarmonyPage';
import DailyHoroscopes from './pages/DailyHoroscopes';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/features" element={<Features />} />
          <Route exact path="/features/marriagecall" element={<MarriageCallPage />} />
          <Route exact path="/features/sunsign" element={<SunSign />} />
          <Route exact path="/features/sunshinharmony" element={<SunsignHarmonyPage />} />
          <Route exact path="/features/dailyhoroscopes" element={<DailyHoroscopes />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
