import { useEffect, useState } from "react";
import axios from "axios";
import BeerCard from "../beerCard/BeerCard";
import { Link } from "react-router-dom";

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
   <div className="listEmoji"><Link to={"/"}><button>🔙</button></Link></div>
        </>
     );
}
 
export default BeerList;