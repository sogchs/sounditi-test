import React, { Component } from 'react';
import Lottie from 'react-lottie'
import headerAnimation from './after-effects/4031-voice-recognition.json'
import pollitoAnimation from './after-effects/pollito.json'
import './App.css';

class App extends Component {
  state = { 
    isPaused: false,
    playMusic: false,
    pauseMusic: true
  }

  url = "http://streaming.tdiradio.com:8000/house.mp3"
  audio = new Audio(this.url);
  play = () => {
    this.setState({
      playMusic: true,
      pauseMusic: false,
      isPaused: false 
    });
    console.log(this.audio);
    this.audio.play();
  }

  pause = () => {
    this.setState({ playMusic: false, pauseMusic: true, isPaused: !this.state.isPaused });
    this.audio.pause();
  }
  
  


render() {
  const headerOptions = {
    loop: true,
    autoplay: true, 
    animationData: headerAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const pollitoOptions = { 
    loop: true,
    autoplay: false, 
    animationData: pollitoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  

  return (
    <div className="App">
      <div className="header">
        <p>welcome to</p>
        <h1>SOUNDITI</h1>
        <Lottie options={headerOptions}
                height={300}
                width={1000}
          />
      </div>
      <div className="content">
      <div>
        <button  onClick={this.play}>PLAY</button>
        <button  onClick={this.pause}>PAUSE</button>
      </div>
        <Lottie options={pollitoOptions}
          height={200}
          width={200}
          isPaused={this.state.isPaused}
          sound={this.state.sound}
        />
        <p>Test by Sergio Ortega for Soundity</p>
      </div>
      
    </div>
  );
}}

export default App;
