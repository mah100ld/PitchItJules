import logo from './logo.svg';
import './App.css';
import PhraseGenerator from './PhraseGenerator/PhraseGenerator';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row align-items-center">
          <div className="header-background">

          </div>
        </div>
        <div class="row mt-5 pl-2 pr-2">
          <PhraseGenerator />
          </div>

        <div className="row mt-5 ml-10 mr-10">
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/watch?v=nUE841pCXtc"
        frameborder="0"></iframe>
        </div>
      </div>
        
    </div>
  );
}

export default App;
