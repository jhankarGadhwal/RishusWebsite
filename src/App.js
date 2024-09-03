import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componants/Navbar';
import Footer from './componants/Footer';
import Home from './componants/Home';
import Services from './componants/Services';
import Projects from './componants/Projects';
import About from './componants/About';
import Contact from './componants/Contact';
import PrivacyandPolicy from './componants/PrivacyandPolicy';
import TermsofServices from './componants/TermsofServices';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyandPolicy />} />
          <Route path="/terms" element={<TermsofServices />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
