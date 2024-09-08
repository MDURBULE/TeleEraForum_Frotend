import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Forum from './pages/Forum';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import CompletedEventDetail from './pages/CompletedEventDetail';

function App() {
  return (
    <Router>
      <div className=''>
      <Navbar/>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/completedEvent/:id" element={<CompletedEventDetail/>} />       
          </Routes>
    </Router>
  );
}

export default App;
