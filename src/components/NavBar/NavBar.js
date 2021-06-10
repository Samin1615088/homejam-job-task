import React from 'react';
import logo from './../../images/logo.svg';
import searchIcon from './../../images/icons/icon_search.svg';
import basketIcon from './../../images/icons/icon_basket.svg';

const NavBar = () => {
    return (
        <nav className="pl-1 pt-1.5 text-white font-openSans flex justify-between items-center text-sm">
            <img src={logo} alt="" className="w-16 cursor-pointer sm:w-24" />
            <ul className="flex items-center">
                <li className="mx-2 cursor-pointer md:mx-5">
                    <img src={searchIcon} alt="" className="inline-block pr-2" />
                    Search
                </li>
                <li className="mx-2 cursor-pointer md:mx-5 ">
                    Help
                </li>
                <li className="mx-2 cursor-pointer md:mx-5">
                    Account
                </li>
                <li className="mx-2 cursor-pointer md:mx-5">
                    <img src={basketIcon} alt="" className="inline-block" />
                </li>

            </ul>
        </nav>
    );
};

export default NavBar;