import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './components/StartingPage'
import Projects from './components/Projects'
import Jobs from './components/JobExperiences'
import HomepageIT from './components/Homepage IT';
import HomepageENG from './components/Homepage ENG';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='homeit' element={<HomepageIT />} />
        <Route path='homeeng' element={<HomepageENG />} />
        <Route path='projects' element={<Projects />} />
        <Route path='jobs' element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
