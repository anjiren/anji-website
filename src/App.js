import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
            <a href="https://paper.dropbox.com/doc/Anji-Ren-Resume-9seT1619QWDcV44bvtlLS?_tk=share_copylink"><h5>Resume</h5></a>
          </div>
          <div className="Info-item">
            <a href="https://github.com/anjiren"><h5>Github</h5></a>
          </div>
          <div className="Info-item">
            <a href="https://www.instagram.com/anjimade/"><h5>Instagram</h5></a>
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
