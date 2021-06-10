import React from 'react';
import logo from './../../images/logo.svg';
import searchIcon from './../../images/icons/icon_search.svg';
import basketIcon from './../../images/icons/icon_basket.svg';

const NavBar = () => {
    return (
        <header className="mx-1 ml-2 md:mx-36 pt-1.5 text-white font-openSans flex justify-between items-center text-sm">
            <img src={logo} alt="" className="w-16 sm:w-24 " />
            <ul className="flex">
                <li className="px-2 md:px-5">
                    <img src={searchIcon} alt=""  className="inline-block pr-2"/>
                    Search
                </li>
                <li className="px-2 md:px-5">
                    Help
                </li>
                <li className="px-2 md:px-5">
                    Account
                </li>
                <li className="px-2 md:px-5">
                    <img src={basketIcon} alt=""  className="inline-block"/>
                </li>
                
            </ul>
        </header>
    );
};

export default NavBar;