import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToUp';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-JY848G3RYS');
ReactGA.send('pageview');
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
