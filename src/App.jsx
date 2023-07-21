import React, { useEffect, useState } from 'react';
import API_KEY from './config'
import ImagesGrid from "./Components/ImagesGrid";
import SearchBar from './Components/SearchBar';

function App() {

  /* Creacion de variables de estado */
  const [imagenes, setImagenes] = useState([]);

  /* Funcion que ejecuta el random al iniciar la app */

  useEffect(() => {
    const imgRandom = async () => {

      const URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=25`

      const respuesta = await fetch(URL)
      const data = await respuesta.json()
      setImagenes(data)

    }

    imgRandom()

  }, []);

  const nuevaCall = () => {
    const callFunction = async () => {

      const URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=25`

      const respuesta = await fetch(URL)
      const data = await respuesta.json()
      setImagenes(data)

    }
    
    callFunction();
  }

  return (
    <div>
      <SearchBar nuevaCall={nuevaCall}/>
      <ImagesGrid imagenes={imagenes}/>
    </div>

  );
}

export default App;
