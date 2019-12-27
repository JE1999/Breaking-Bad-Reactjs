import React, { useState, useEffect } from 'react';
import Axios from 'axios'

//Images
import Logo from './Images/bb.png'

//Components
import Frase from './Components/Frase'

function App() {

  const [ frase, setFrase ] = useState({})

  //Consulta a una rest API (Recomendado con useEffect)
  //npm install --save axios

  const ConsultarApi = async () =>{
    const resultado = await Axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    setFrase(resultado.data[0])
  }

  useEffect( () => {
    ConsultarApi()
  }, [])

  return (
    <div className="container my-5 p-5">
      <center>
        <img width="300px" src={Logo} alt="Breaking Bad"/>
      </center>

      <button
        className="btn btn-success btn-block mt-3"
        onClick={ConsultarApi}
      >Generar Nueva</button>

      <div className="bg-white mt-3 p-3 rounded shadow">
        <Frase
          frase={frase}
        />
      </div>
    </div>
  );
}

export default App;
