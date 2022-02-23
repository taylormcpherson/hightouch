
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App__main">

        <div className="App__nav">
          <Navbar/>
        </div>
        
        <div class="App__content">

        </div>
       

      </div>
     
    </div>
  );
}

export default App;
