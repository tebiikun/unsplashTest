import {ContextoPadre} from '../../App'
import { useContext } from 'react'
import './buscador.css';

const BuscadorComponent = ()=>{

    const{setValor,buscarImg,valor}=useContext(ContextoPadre)
    
    return(
        <div className='container-fluid layoutBuscador'> 
        <div className="input-group inputGroupContainer">
          <input type="text" className="form-control shadow-none inpBuscar" placeholder="Buscar ..." onChange={e=>setValor(e.target.value)} />
          <button className="btn btn-outline-secondary btnBuscar sheen" onClick={()=>buscarImg()} disabled={valor==''?'disabled':''}>Buscar</button>
        </div>
      </div>
    )
}

export {BuscadorComponent}