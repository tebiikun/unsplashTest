import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import API_KEY from './config'
import './App.css';
import { ContainerBuscado } from './Components/ContainerBuscado/containerBuscado';
import { ContainerRandom } from './Components/ContainerRandom/containerRandom';
import { BuscadorComponent } from './Components/Buscador/buscador';
import { ContainerError } from './Components/ContainerError/containerError';

export const ContextoPadre = React.createContext()

function App() {

  /* Creacion de variables de estado */

  const [valor,setValor]=useState('')
  const [arrayRandom, setArrayRandom]=useState([])
  const [arrayBusqueda, setArrayBusqueda]=useState([])
  const [ocultarRandom, setOcultarRandom]=useState(true)
  const [pagina, setPagina]=useState(1)
  const [busquedaError, setBusquedaError]=useState(0)
  const [descarga, setDescarga]=useState('')
  const [pais,setPais]=useState('')
  const [likes,setLikes]=useState(0)
  const [vistas,setVistas]=useState(0)
  const [descargaCantidad,setDescargaCantidad]=useState(0)
  const [containerAmpliado, setContainerAmpliado]=useState(false)
  const [imgAmpliada, setImgAmpliada]=useState('')
  const [camara, setCamara]=useState('')
  const [descripcion, setDescripcion]=useState('')
  const [nombreFotografo, setNombreFotografo]=useState('')

  /* Funcion que ejecuta el random al iniciar la app */
  
  useEffect(()=>{
    const imgRandom = async ()=>{

      const URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=25`

      const respuesta = await fetch(URL)
      const data = await respuesta.json()
      setArrayRandom(data)
     
    }

    imgRandom()

  },[])

  /* Funcion que busca la imagen */

  const buscarImg = async (buscarImagen)=>{

    let busqueda = valor

    if(buscarImagen!=null){
      busqueda = buscarImagen
      setValor(busqueda)
    }

    console.log('ahora esta buscando',busqueda)

    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${busqueda}&per_page=25`

    const respuesta = await fetch(URL)
    const data = await respuesta.json()
    setArrayBusqueda(data.results)
    setOcultarRandom(false)
    setPagina(2)
  
    data.results.length==0?setBusquedaError(2):setBusquedaError(1)

  }

  /* Funcion que realiza el scroll infinito */

  useEffect(()=>{
    const sigPagina = async ()=>{

      const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page=25&page=${pagina}`

      const respuesta = await fetch(URL)
      const data = await respuesta.json()
      setArrayBusqueda(busquedaPrevia=>busquedaPrevia.concat(data.results))
      console.log(data)
      console.log('El valor de pagina es:',pagina)
      console.log(arrayBusqueda)

    } 

    sigPagina()

  },[pagina])

  /* Funcion que pasa el id, con el cual podemos usar la previsualizacion de un objeto especifico */

  const pasarId = async (idFotografia)=>{

    const URL = `https://api.unsplash.com/photos/${idFotografia}/?client_id=${API_KEY}`

    const respuesta = await fetch(URL)
    const data = await respuesta.json()
    setImgAmpliada(data.urls.regular)
    setCamara(data.exif.name)
    setDescripcion(data.alt_description)
    setNombreFotografo(data.user.name)
    setDescarga(data.links.html)
    setPais(data.location.country)
    setLikes(data.likes)
    setVistas(data.views)
    setDescargaCantidad(data.downloads)
    setContainerAmpliado(true)
    console.log('aca estan los datos de la llamada por id',data)
    document.body.style.overflow = 'hidden'
    console.log(descarga)
     
}

  /* Creo el objeto que transforma a los estados en estados globales usando useContext */

  const varContexto = {valor,setValor,arrayRandom,setArrayRandom,arrayBusqueda,setArrayBusqueda,ocultarRandom,setOcultarRandom,pagina,setPagina
  ,busquedaError,setBusquedaError,descarga,setDescarga,pais,setPais,likes,setLikes,vistas,setVistas,descargaCantidad,setDescargaCantidad
  ,containerAmpliado,setContainerAmpliado,imgAmpliada,setImgAmpliada,camara,setCamara,descripcion,setDescripcion,nombreFotografo,setNombreFotografo
  ,buscarImg,pasarId}
  
  return (
    <ContextoPadre.Provider value={varContexto}>
      <BuscadorComponent/>
      {ocultarRandom &&
        <ContainerRandom/>
      }
      <InfiniteScroll dataLength={arrayBusqueda.length} hasMore={true} next={()=>setPagina(pagina+1)}>
        {busquedaError==1&&
            <ContainerBuscado/>
          }
        {busquedaError==2&&
          <ContainerError/>
        }
      </InfiniteScroll>
    </ContextoPadre.Provider>
  );
}

export default App;
