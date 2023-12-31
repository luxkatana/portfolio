import {useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
function Navbar()
{
    const [ExpandNav, setExpand] = useState(false);
    const location = useLocation();

    useEffect(()  => setExpand(false), [location]);
    return <div className="navbar" id={ExpandNav? "open": "close"}>
        <div className="toggleButton">
        <button 
        onClick={
            () => {
                setExpand(!ExpandNav);
            }

        }>
            <ReorderIcon/>
        </button>
        </div>
        <div className="links">
            <Link to="/">Home</Link>
        </div>

    </div>

}

export default Navbar;
