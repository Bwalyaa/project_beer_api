import { Link } from "react-router-dom";


const BeerCard = ({ id, img, slogan, producer, name}) => {
    return ( 
        <>
            <img src={img} />
            <h2>{name}</h2>
            <p>{slogan}</p>
            <p>{producer}</p>
            <Link to={`/beerlist/${id}`}><button>Details</button></Link>
        </>
     );
}
 
export default BeerCard;