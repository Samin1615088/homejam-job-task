import React from 'react';
import NavBar from '../NavBar/NavBar';
import CircularLabel from '../CircularLabel/CircularLabel';

const Header = () => {
    return (
        <header className="relative px-1 bg-no-repeat bg-cover lg:h-screen bg-banner md:px-36">
            <NavBar />
            <div className="mt-48 text-white">
                <h1 className="font-libre font-700 text-7xl">Cari Cari</h1>
                <div className="max-w-xl mt-6 text-2xl text-white text-opacity-60 font-nunito font-400">
                    <h2>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</h2>
                </div>
            </div>

            <div className="left-0 right-0 mt-16 lg:mt-0 lg:absolute bottom-16">
                <div className="grid grid-cols-1 lg:gap-4 lg:grid-cols-4 justify-items-center">
                    <CircularLabel />
                    <CircularLabel />
                    <CircularLabel />
                    <CircularLabel />
                </div>
            </div>

        </header>
    );
};

export default Header;