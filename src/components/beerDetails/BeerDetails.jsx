import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

        <h1>{beers.name}</h1>
        
        </>
     );
}
 
export default BeerDetails;