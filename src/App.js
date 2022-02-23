
import './App.scss';
import Eyebrow from './components/Eyebrow/Eyebrow';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Eyebrow/>
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
