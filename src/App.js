import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <div className="content">
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
