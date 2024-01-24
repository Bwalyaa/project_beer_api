import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const BeerDetails = () => {

    const idParam = useParams()
   
    const [beers, setBeers] = useState([])

    const apiLink = `https://ih-beers-api2.herokuapp.com/beers/${idParam.id}`

    useEffect(()=>{
        const FetchApi = async () => {
            const resp = await axios.get(apiLink)
            setBeers(resp.data)
        }
        FetchApi()
    }, [idParam.id])



    return ( 
        <>
        <div className="detailImg">{beers.image_url}</div>

        <div className="bierDetailsTexte">
        <h1>{beers.name}</h1>
        <h2>{beers.tagline}</h2>
        <p>{beers.description}</p>
        <h4>{beers.contributed_by}</h4>
        </div>
        <div className="emoji"><Link to={"/beerlist"}><button>🔙</button></Link></div>
        
        </>
     );
}
 
export default BeerDetails;