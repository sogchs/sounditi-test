import React, { Component } from 'react';
import Lottie from 'react-lottie'
import headerAnimation from './after-effects/4031-voice-recognition.json'
import playAnimation from './after-effects/Play-Pause.json'
import './App.css';

class App extends Component {

render() {
  const headerOptions = {
    loop: true,
    autoplay: true, 
    animationData: headerAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const playOptions = { 
    loop: false,
    autoplay: false, 
    animationData: playAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="App">
      <div className="header">
        <p>welcome to</p>
        <h1>SOUNDITI</h1>
        <Lottie options={headerOptions}
                height={400}
                width={1000}
          />
      </div>
      <div className="">
        <Lottie options={playOptions}
              height={50}
              width={50}
        />
      </div>
      
    </div>
  );
}}

export default App;
