import React, {useState} from 'react';
import './App.css';
import getQuote from './data/Quotes';

function App() {

  const [quoteObj, setQuoteObj] = useState(getQuote())

  function newQuoteClickHandler() {
    setQuoteObj(getQuote());
  }
  
  return (
    <div className="App">
      <div id="quote-box" className="container-fluid">
        <div id="text">"{quoteObj.quote}"</div>
        <div id="author">- {quoteObj.author}</div>
        <div className="row">
          <button id="new-quote" className="btn btn-primary" onClick={newQuoteClickHandler}>New Quote</button>
          <a id="tweet-quote" className="btn btn-info" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quoteObj.quote}" - ${quoteObj.author}`} target="_blank">Tweet Quote</a>
        </div>
      </div>
    </div>
  );
}

export default App;
