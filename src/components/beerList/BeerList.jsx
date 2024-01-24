import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../nav/Nav";
import BeerCard from "../beerCard/BeerCard";

const BeerList = () => {

    const [beers, setBeers] = useState([])

    const api = "https://ih-beers-api2.herokuapp.com/beers"

    useEffect(()=>{
        const FetchApi = async () => {
            const resp = await axios.get(api)
            console.log(resp);
            setBeers(resp.data)
        }
        FetchApi()
    }, [])

    return ( 
        <>
        
        <Nav />
        {beers.map((beer, index)=>{
            return (
                
                <div className="bierListe" key={index}>
                    
                    <BeerCard 
                    id={beer._id}
                    img={beer.image_url}
                    slogan={beer.tagline}
                    producer={beer.contributed_by}
                    name={beer.name}
                    />
                </div>

                
            )
            
        })}

        </>
     );
}
 
export default BeerList;