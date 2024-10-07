import React from "react";
import './css/admin.css';
import { Link } from 'react-router-dom';

const Title = ({ text, toggleSidebar }) => {

    
    return (
        <div className="title-admin">
            <Link to="/main" className="linkToSite">Ваш сайт</Link>
            <p>{text}</p>
            <div className="opacity">Ваш сайт</div>
{/* 
            <div className={`burger_container ${burgerActive ? 'open' : ''}`} onClick={handleBurgerClick}>
                <div className="burger__line1 burgerLine"></div>
                <div className="burger__line2 burgerLine"></div>
                <div className="burger__line3 burgerLine"></div>
            </div> */}
        </div>
    );
}

export default Title;
