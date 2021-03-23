import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import Card from './components/card';
import Countries from './components/countries';
import logo from './logo/logo2.png'

import './App.css';

  
function App() {
  

  return (
    <div className="App">
      <div className="App-header">
        <div className="logo-div">
          <img src={logo} alt="img" className="img-logo"  />
        </div>
        <div>
          <h1 className="header-text">Covid-19 live state</h1>
        </div>
          
      </div>
       
      <Card />
      <Countries />
      <ScrollUpButton 
      StopPosition={0}
      ShowAtPosition={150}
      EasingType='easeOutCubic'
      AnimationDuration={500}
      ContainerClassName='ScrollUpButton__Container'
      TransitionClassName='ScrollUpButton__Toggled'
      />
    </div>
  );
}

export default App;
