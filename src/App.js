
import './App.scss';
import Articles from './components/Articles/Articles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import HeroIcon from './images/heroIcon.png';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App__main">
        <div className="App__nav">
          <Navbar/>
        </div>
        <div className="App__content">
          <Hero
            iconSrc={HeroIcon}
            iconAlt="Hightouch Documentation Icon."
            title= "Hightouch Documentation"
            copy="Get an overview of Hightouch's features, integrations and how to use them."
          />
          <Articles
            title="Dive deeper..."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
