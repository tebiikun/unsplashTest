import {ContextoPadre} from '../../App'
import { useContext } from 'react'
import botonCerrar from '../../assets/botonCerrar.svg'
import meGusta from '../../assets/meGusta.svg'
import visualizaciones from '../../assets/visualizaciones.svg'
import descargaIcon from '../../assets/descargaIcon.svg'
import './containerPrevisualizado.css';

const ContainerPrevisualizado = ()=>{

  const {imgAmpliada,descargaCantidad,setContainerAmpliado,descripcion,camara,nombreFotografo,likes,vistas,pais,descarga}=useContext(ContextoPadre)
    
  return(
        <>{
            <div className='divMasInformacion'>
              <img className='btnCerrarContainer' src={botonCerrar} onClick={()=>(setContainerAmpliado(false), document.body.style.overflow = 'unset')} ></img>
              <div className='container-fluid fondo' >
                <div className="container-fluid containerFotoYDetalles">
                  <img src={imgAmpliada} alt='' className="img-fluid containerFoto" />
                  <div className="containerDescripcion">
                    <p className="text-left titulosPrevisualizacion">Descripción: <span className='propiedadesPrevisualizacion'>{descripcion==null?'Info no disponible':descripcion}</span></p>
                    <p className="text-left titulosPrevisualizacion">Modelo de camara: <span className='propiedadesPrevisualizacion'>{camara==null?'Info no disponible':camara}</span></p>
                    <p className="text-left titulosPrevisualizacion">Fotografo: <span className='propiedadesPrevisualizacion'>{nombreFotografo==null?'Info no disponible':nombreFotografo}</span></p>
                    <p className="text-left titulosPrevisualizacion">Ubicación: <span className='propiedadesPrevisualizacion'>{pais==null?'Info no disponible':pais}</span></p>
                    <div className='container-fluid contIconos'>
                      <div className='container-fluid containerIconoYEstadisticas'>
                        <img className='img-fluid iconos' src={meGusta}></img>
                        <p className='text-left linksEstadisticas'>{likes==null?'Info no disponible':likes}</p>  
                      </div>
                      <div className='container-fluid containerIconoYEstadisticas'>
                        <img className='img-fluid iconos' src={visualizaciones}></img>
                        <p className='text-left linksEstadisticas'>{vistas==null?'Info no disponible':vistas}</p> 
                      </div>
                      <div className='container-fluid containerIconoYEstadisticas'>
                        <img className='img-fluid iconos' src={descargaIcon}></img>
                        <p className='text-left linksEstadisticas'>{descargaCantidad==null?'Info no disponible':descargaCantidad}</p> 
                      </div>
                    </div> 
                    <div className='container-fluid linkDescargaBox'>
                      <a href={descarga} className='css-button-gradient--9 ' target='blank'>Descargar</a>
                    </div>           
                  </div>
                </div>
              </div>
            </div>
            }
        </>
    )
}

export {ContainerPrevisualizado}