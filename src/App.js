import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.hideScrollHint);
  }

  componentWillUnmount(){
     window.removeEventListener('scroll', this.hideScrollHint);
  }

  hideScrollHint() {
    const BUFFER_PX = 100;
    if (window.innerHeight + window.scrollY < document.body.clientHeight - BUFFER_PX) {
      document.getElementsByClassName('Scroll-hint')[0].style.opacity='1';
    } else {
      document.getElementsByClassName('Scroll-hint')[0].style.opacity='0';
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Anji Ren</h1>
        </header>
        <p className="App-intro">
          I am a UX engineer at Google building <a href="https://hire.google.com/">Hire</a>
        </p>
        <p className="App-intro">
          Previously, I worked at
          a <a href="https://techcrunch.com/2015/11/19/google-buys-bebop-and-names-diane-greene-to-lead-enterprise-cloud-effort/">startup</a> and
          graduated from MIT in 2015 with a Bachelors of Science
          in Electrical Engineering and Computer Science
        </p>
        <p className="App-intro">
          I currently live in SF with
          my <a href="https://www.instagram.com/evie_the_papijack/">woofer</a>
        </p>
        <div className="Info-container">
          <div className="Info-item">
            <a href="https://drive.google.com/file/d/1vRcqbm2um5LCVY7tZPO05BhontNYHzQE/view?usp=sharing"><h5>Resume</h5></a>
          </div>
          <div className="Info-item">
            <a href="https://github.com/anjiren"><h5>Github</h5></a>
          </div>
          <div className="Info-item">
            <a href="https://www.instagram.com/softerpaus/"><h5>Instagram</h5></a>
          </div>
        </div>
        <div className="Scroll-hint">
          There's more
        </div>
      </div>
    );
  }
}

export default App;
