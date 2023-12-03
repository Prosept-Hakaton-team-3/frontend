import './Header.css'
import { Link } from 'react-router-dom';
import logo from "../../images/prosept-logo.svg";
import { Navigation } from '../Navigation/Navigation';

export function Header(props) {
    return (
        <header className="header">
            <Link to="/" title="На главную"><img className="header__logo" src={logo} alt="Логотип"/> </Link>
            <Navigation onMenu={props.onMenu}/>
        </header>
    )
}