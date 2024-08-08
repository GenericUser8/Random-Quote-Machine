import { useState } from 'react';

// Special type for each quote
type Quote = {
  quote: string,
  author: string
}

// Quote Pool
const QUOTES: Quote[] = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney"
  }
]

function QuoteMachine() {
  const [quote, setQuote] = useState(getQuote());
  setQuote(getQuote());
  return (
    <div id="quote-box">
      <div id="text">{quote["quote"]}</div>
      <div id="author">{quote["author"]}</div>
      <div className="socials">
        <a id="tweet-quote"></a>
      </div>
      <h1>Hello World!</h1>
    </div>
    
  )
}

function getQuote(): Quote {
  const index: number = Math.floor(Math.random() * QUOTES.length);
  return QUOTES[index];
}

export default QuoteMachine