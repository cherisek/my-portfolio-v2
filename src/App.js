import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Footer } from './components/Footer/Footer';
import { useRef } from 'react';

function App() {
  const aboutMeRef = useRef(null); 

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "center"
      })
    }
  }

  return (
    <div className="App">
      <Navigation />
      <Header scrollToAboutMe={scrollToAboutMe} />
      <div className="content" ref={aboutMeRef} >
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
