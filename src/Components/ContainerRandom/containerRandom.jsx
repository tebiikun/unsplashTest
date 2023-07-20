import {ContextoPadre} from '../../App'
import { useContext } from 'react'
import { ContainerPrevisualizado } from '../ContainerPrevisualizado/containerPrevisualizado'
import './containerRandom.css';

const ContainerRandom = ()=>{

    const{arrayRandom,pasarId,containerAmpliado}=useContext(ContextoPadre)
    return(
        <>
          <div className='container-fluid contMarginOn'>
            <div className='row gridColumnaUpdate justify-content-center'>
            {arrayRandom.map((elem, ind)=>{return(
            <div className="card col-lg-2 col-md-3 col-sm-4 col-6 colNoPadding sombraCard" key={ind} >
              <img src={elem.urls.regular} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title cardLocalizacion"><strong>Localizacion: </strong><span>{elem.location.country==null?'Info no disponible':elem.location.country}</span></h5>
                <h5 className="card-title cardLocalizacion"><strong>Camara: </strong><span>{elem.exif.name==null?'Info no disponible':elem.exif.name}</span></h5>
                <button className="css-button-gradient--7  " onClick={()=>pasarId(elem.id)}>Mas info</button>
              </div>
            </div>
            )}
            )}
            </div>
          </div>
          {containerAmpliado &&
              <ContainerPrevisualizado />
            }
        </>
    )
}

export {ContainerRandom}