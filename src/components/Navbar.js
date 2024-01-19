import React from 'react';
import logo from '../img/iconLogoWhite 1.svg'
import '../style/Navbar.css'
import burger from '../img/Бургер.svg'

function Navbar() {
    return (
        <header>
            <div className={'logo'}>
                <img src={logo} alt='asd'/>
            </div>
            <div className={'nav'}>
                <ul className={'nav__ul'}>
                    <li className={'nav__li'}><a href={'#'}>Все туры</a></li>
                    <li className={'nav__li'}><a href={'#'}>Отзывы</a></li>
                    <li className={'nav__li'}><a href={'#'}>Контакты</a></li>
                </ul>
            </div>
            <div className={'burger'}><img src={burger} alt={'asd'}/></div>
        </header>
    );
}

export default Navbar;