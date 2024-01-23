import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
         <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to="/beerlist"><button>Beer List</button></Link>
            
        </nav>
        </>
     );
}
 
export default Nav;