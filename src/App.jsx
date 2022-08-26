import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [state,setState]= useState("");

  const quoteGenerate=()=> {

      axios.get("https://api.adviceslip.com/advice")
      .then((res)=> {

        const {advice}= res.data.slip
          console.log(advice);
          setState(advice);

      })
      .catch((error)=> {

         console.log(error);

      })

   }

   useEffect(()=> {

      quoteGenerate();
   })

  return (
    <div className="app">

    <div className='card'>     
          <h3>"{state}"</h3><br></br>
          <button className='btn' onClick={quoteGenerate}>Next Quote</button>
    </div>
    </div>
  )
}

export default App
