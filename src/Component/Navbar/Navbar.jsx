import { Link } from "react-router-dom";
import './Navbar.css'

const NavBar = () => {
    return (
        <nav className="navBar">
            <ul>
                <li>
                    <Link to='/'>Homepage</Link>
                </li>
                <li>
                <Link to='/cart'>Cart</Link>
                </li>
                <li>
                <Link to='/checkout'>Checkout</Link>
                </li>
                <li>
                <Link to='/login'>Login</Link>
                </li>
                <li>
                <Link to='/profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/menu'>Menu</Link>
                </li>
                <li>
                    <Link to='/foodDetails'>Food</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;