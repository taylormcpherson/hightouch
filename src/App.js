
import './App.scss';
import React, { useState,useEffect } from 'react';
import Articles from './components/Articles/Articles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import HeroIcon from './images/heroIcon.png';

function App() {

  /**
   *  Even though I am storing my navigation and article data in their own js files,
   *  This is an example of how I could similar access json data through an ajax call. 
   *  
   *  To view the data that is fetched, see the console logs in browser dev tools.
   * 
   *  @src : help from https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
   **/
  const [ data, setData ] = useState([]);

  const getData = () => {
    fetch( 'data.json' , {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(jsonData) {
        setData(jsonData);
      });
  }

  useEffect( () => {
    getData();
  }, [] );

  const navData = data.navigationData;
  console.log('Navigation data from JSON ajax:', navData);


  return (
    <div className="App">
      <Header/>
      <div className="App__main">
        <div className="App__nav">
          <Navbar
            navItems={navData}
          />
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
