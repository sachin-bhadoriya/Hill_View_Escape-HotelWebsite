import { useEffect } from "react";
import "../CSSFile/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {


    const location = useLocation();
    useEffect(() => {
        // console.log(location.pathname)
    }, [location]);


    return (
        <>
            <ul className='navbarlist'>
                <li>
                    Hillview Escape
                </li>
                <li>
                    <Link className={location.pathname === '/' ? 'link-active' : 'link-deactive'} to="/">Home</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/Facilities' ? 'link-active' : 'link-deactive'} to="/Facilities">Facilities</Link>
                </li>
                <li>
                    Rooms
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </>
    )
}

export default Navbar