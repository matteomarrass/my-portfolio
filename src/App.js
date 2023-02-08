import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './components/StartingPage'
import Projects from './components/Projects'
import Jobs from './components/JobExperiences'
import HomepageIT from './components/Homepage IT';
import HomepageENG from './components/Homepage ENG';
import Error404 from './components/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='homeit' element={<HomepageIT />} />
        <Route path='homeeng' element={<HomepageENG />} />
        <Route path='projects' element={<Projects />} />
        <Route path='jobs' element={<Jobs />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
