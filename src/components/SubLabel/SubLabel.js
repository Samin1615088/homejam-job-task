import React from 'react';
import leftArrow from './../../images/icons/icon_right_arrow.svg';
import rightArrow from './../../images/icons/icon_left_arrow.svg';

const SubLabel = ({ content }) => {
    return (
        <div className="flex items-center justify-between px-4 mt-12 text-white md:px-28" >
            <div>
                <h1 className="inline-block text-3xl font-libre font-400">{content}</h1>
                <div className="w-12 h-1 mt-1 bg-primary-blue" />
            </div>
            {
                content === 'Upcoming Shows' ?
                    (<h4 className="text-base text-primary-yellow-light font-nunito font-600">View All</h4>)
                    :
                    (<div className="text-base text-white font-nunito font-600">
                        <span>1</span> <span className="opacity-50 ">/12</span>
                        <img src={leftArrow} alt=""  className="inline-block ml-6"/>
                        <img src={rightArrow} alt=""  className="inline-block ml-5"/>
                    </div>)
            }

        </div>
    );
};

export default SubLabel;