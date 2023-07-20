import busquedaFallida from '../../assets/no-results.png'
import './containerError.css';

const ContainerError = ()=>{
    return(
        <div className='container-fluid imagenNoEncontradaContainer'>
              <h1>Oops! No se encontraron resultados.</h1>
              <img src={busquedaFallida} alt=''></img>
        </div>
    )
}

export {ContainerError}