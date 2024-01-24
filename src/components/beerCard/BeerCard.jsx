import { Link } from "react-router-dom";


const BeerCard = ({ id, img, slogan, producer, name}) => {
    return ( 
        <>
            <img src={img} />
            <div className="bierTexte">
            <h2>{name}</h2>
            <p className="pTag">{slogan}</p>
            <p>{producer}</p>
            <Link to={`/beerlist/${id}`}><button>Details</button></Link>
            </div>
        </>
     );
}
 
export default BeerCard;