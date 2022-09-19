import React from 'react';
import Header from './screens/Header';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Description from './screens/Description';
import TeamDesc from './screens/TeamDesc';
import StyleOptions from './screens/StyleOptions';
import Services from './screens/Services';
import NewsTeller from './screens/NewsTeller';
import Clients from './screens/Clients';
import Technology from './screens/Technology';
import Portfolio from './screens/Portfolio';
import Creative from './screens/Creativity';
import Number from './screens/Number';
import Contact from './screens/Contact';
import GoogleMaps from './screens/GoogleMaps';

function App() {
  return (
    <div className="App">
      <div
        style={{
          height: '100%',
          padding: '0px',
          margin: '0px',
          overflow: 'hidden',
        }}
      >
        <Header />
        <Home />
        <About />
        <Description />
        <TeamDesc />
        <NewsTeller />
        <Services />
        <Clients />
        <Technology />
        <Creative />
        <Portfolio />
        <Number />
        <Contact />
        <GoogleMaps />
        <StyleOptions />
      </div>
    </div>
  );
}

export default App;
