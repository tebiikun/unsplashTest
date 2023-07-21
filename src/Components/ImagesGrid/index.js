import './style.css';
import Card from '../Card';
const ImagesGrid = (props) => {

    const {
        imagenes
    } = props;

    return (
        <div className="container">
            {
                imagenes && imagenes.map((el, index) => {
                    return <Card key={'el' + index} imagen={el}/>
                })
            }
        </div>
    );
}

export default ImagesGrid;