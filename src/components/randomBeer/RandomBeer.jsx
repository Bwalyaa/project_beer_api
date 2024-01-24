import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        
        <div className="randomImg">
        <img src={beer.image_url} />
        </div>

        <section className="randomSection">
        <div className="randomName">
            <h2>{beer.name}</h2>
        </div>
        <div className="randomTagline">
        <h3>{beer.tagline}</h3>
        </div>
        <div className="randomFirstBrewed">
        <h4>First Brewed:</h4>
        <h4>{beer.first_brewed}</h4>
        </div>
        <div className="randomAttenuationLevel">
            <h4>attenuation level:</h4>
            <h4>{beer.attenuation_level}</h4>
        </div>
        <p>{beer.description}</p>
        <p>Contributed by: {beer.contributed_by}</p>
        </section>
        <div className="emoji"><Link to={"/"}><button>🔙</button></Link></div>
        </>
     );
}
 
export default RandomBeer;