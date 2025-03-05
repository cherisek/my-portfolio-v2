import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Footer } from './components/Footer/Footer';
import { useRef } from 'react';

function Home() {
  const aboutMeRef = useRef(null); 

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "center"
      });
    }
  };

  return (
    <div className="App">
      <div className="content">
        <Header scrollToAboutMe={scrollToAboutMe} />
        <div className="profile-content" ref={aboutMeRef} >
          <Profile />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
