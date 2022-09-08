import React  from 'react';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const backToMainPage = () => {
        navigate("/")
    }

    return (
        <header className="top_nav">
            <div className="top_nav_logo" onClick={() => backToMainPage()}>WiecznaCzystość</div>
            <input id="menu_toggle" type="checkbox"/>
            <label className='menu_button_container' htmlFor="menu_toggle">
                <div className='menu_button'></div>
            </label>
            <nav className="menu">
                <li className="menu_element"><a href="./about" className="menu_route">O nas</a></li>
                <li className="menu_element"><a href="./prices" className="menu_route">Cennik</a></li>
                <li className="menu_element"><a href="./contact" className="menu_route">Kontakt</a></li>
            </nav>
        </header>
    )
}
