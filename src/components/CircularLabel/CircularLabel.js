import React from 'react';
import iconDummy from './../../images/icons/icon_love.svg';

const CircularLabel = () => {
    return (
        <div className="flex flex-col items-center justify-center w-48 h-48 text-white bg-transparent border-2 border-white rounded-full lg:w-52 lg:h-52 border-opacity-20">
            <img className="" src={iconDummy} alt="" />
            <span className="block mt-3 text-2xl font-libre">
                0
            </span>
            <span className="text-base opacity-50 font-nunito ">
                Label
            </span>
        </div>
    );
};

export default CircularLabel;