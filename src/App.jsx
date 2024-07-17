import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quote, setQuote] = useState("Kanye once said")
  useEffect(() => { //react hook
    fetch('https://drive.google.com/file/d/1IOuTBXC5gglDKp5QkJ2Bgaea-IIUM4bI/view?usp=sharing')
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
