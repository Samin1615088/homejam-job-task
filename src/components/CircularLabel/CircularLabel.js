import React from 'react';
import iconLove from './../../images/icons/icon_love.svg';
import iconEvent from './../../images/icons/icon_event.svg';

const CircularLabel = ({ isActive = false }) => {
    return (
        <div className={`flex flex-col items-center justify-center w-48 h-48 bg-transparent  text-white border-2 rounded-full lg:w-52 lg:h-52    ${isActive ? 'border-primary-pink border-2' : 'border-white border-2 border-opacity-20'}`}>
            <img className="" src={isActive ? iconLove : iconEvent} alt="" />
            <span className="block mt-3 text-2xl font-libre">
                0
            </span>
            <span className="text-base opacity-50 font-nunito">
                Label
            </span>
        </div>
    );
};

export default CircularLabel;