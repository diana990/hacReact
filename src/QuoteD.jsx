import { useEffect, useState } from 'react';
import './App.css';

function Quote() {
  const [quote, setQuote] = useState("")
  useEffect(() => {
    fetch('https://api.kanye.rest/')
    .then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      setQuote(data.quote);
    })
  }, []);

  return (
    <div>
      <h3>Your daily quote:</h3>
      <div className='quote-block'>{quote}</div>
    </div>
  )
}

export default Quote