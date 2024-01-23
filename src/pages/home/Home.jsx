import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
        <h2>Home page</h2>
        <Link to="/beerlist">All Beers</Link>
        <Link to="/random">Random Beer</Link>
        </>
     );
}
 
export default Home;