import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quote, setQuote] = useState("Kanye once said")
  useEffect(() => { //react hook
    fetch('https://api.kanye.rest/')
      .then((res) => {
        const data = res.json()
        return data;
      })
      .then((data) => {
        console.log(data)
        const retrievedQuote = data.quote 
        console.log(retrievedQuote)
        setQuote(data.quote)
      })


  }, [])

  return (
   <div>{quote}</div>
  )
}

export default App
