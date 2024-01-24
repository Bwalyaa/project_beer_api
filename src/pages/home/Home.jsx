import { Link } from "react-router-dom";
import bild1 from "../../assets/img/bild1.jpg"
import bild2 from "../../assets/img/bild2.png"

const Home = () => {
    return ( 
        <>
        
        <div className="homePage">
            <img src={bild1} />
            <Link to="/beerlist"><button>All Beers</button></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea ipsam mollitia repellendus reprehenderit iusto.</p>
        </div>
        <div className="homePage">
            <img src={bild2} />
            <Link to="/random"><button>Random Beer</button></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse in cupiditate dicta? Obcaecati, recusandae.</p>
        </div>
        </>
     );
}
 
export default Home;