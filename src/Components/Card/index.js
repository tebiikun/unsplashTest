import "./style.css";

const Card = (props) => {
    const {
        imagen
    } = props;

    return (
        <div className="card-class">
            <img className="img" src={imagen?.urls?.regular} />
            <div className="container-description">
                <p className="description">{imagen?.alt_description}</p>

            </div>
        </div>
    )
}

export default Card;