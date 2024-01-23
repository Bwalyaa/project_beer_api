import { useEffect, useState } from "react";
import axios from "axios";

const RandomBeer = () => {

    const randomApi = "https://ih-beers-api2.herokuapp.com/beers/random"

    const [beer, setBeer] = useState([])


    useEffect(()=>{
        const FetchApi = async () => {
            const resp = await axios.get(randomApi)
            setBeer(resp.data)
        }
        FetchApi()
    }, [])

    return ( 
        <>
        <img src={beer.image_url} />
        <h2>{beer.name}</h2>
        </>
     );
}
 
export default RandomBeer;