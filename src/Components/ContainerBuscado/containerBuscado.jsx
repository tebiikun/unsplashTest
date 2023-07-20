import {ContextoPadre} from '../../App'
import { useContext } from 'react'
import { ContainerPrevisualizado } from '../ContainerPrevisualizado/containerPrevisualizado'
import './containerBuscado.css';


const ContainerBuscado = ()=>{

    const {arrayBusqueda,buscarImg,pasarId,containerAmpliado}=useContext(ContextoPadre)

    return(
            <div className='container-fluid contMarginOn'>
                <div className='row gridColumnaUpdate justify-content-center'>
                {arrayBusqueda.map((elem, indice)=>{
                    return(
                    <div className="card col-lg-2 col-md-3 col-sm-4 col-6 colNoPadding sombraCard" key={indice} >
                            <img src={elem.urls.regular} className="card-img-top" alt="..."/>
                            <div className="card-body ">
                            <h5 className="card-title cardLocalizacion"><strong>Descripcion: </strong><span>{elem.alt_description==null?'Info no disponible':elem.alt_description}</span></h5>
                            <div className='etiquetasRelCont'>{elem.tags.map((elemento,indice)=><div key={elemento.title} className='contEti'><strong><a href='#' className='relTag' onClick={()=>buscarImg(elemento.title)}>{indice<2?elemento.title+',':elemento.title}</a></strong></div>)}</div>
                            <button className="css-button-gradient--7  " onClick={()=>pasarId(elem.id)}>Mas info</button>
                            </div>
                        </div>
                        )
                    }
                )
              }
            </div>
            {containerAmpliado &&
              <ContainerPrevisualizado/>
            }
          </div>  
    )
}

export {ContainerBuscado}