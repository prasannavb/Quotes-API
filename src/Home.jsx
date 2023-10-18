import { Link } from "react-router-dom";
import "./Home.css"
const Home=()=>
{
    return(
        <div className="Homepage">
            <h1 className="Home_title">Quote Generator</h1>
            <Link className="RGQ" to="/QG">Random Generate Quote</Link>
            <Link className="GQC" to="/QGC"> Generate Quote By Choice</Link> 
        </div>
    )
    
}

export default Home;