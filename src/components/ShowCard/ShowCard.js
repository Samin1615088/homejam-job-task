import React from 'react';
import dummyPic from './../../images/artist_1.png'
import ticket from './../../images/icons/icon_ticket.svg'
import rightArrowFilled from './../../images/icons/icon_right_arrow_filled.svg'

const ShowCard = (props) => {
   const {profilePic, name, genres} = props.showInfo;
    return (
        <div className=" card--size relative bg-secondary-coffee bg-gradient-to-r from-gradient-blue1 to-gradient-blue2">
            <div className="card card--size absolute top-2 right-2">
                <img className="object-cover h-56 " src={profilePic} alt="" />
                <div className="h-full bg-primary-ebony_black-light pl-4 pt-14 relative">
                    <h4 className="font-libre font-bold text-xl text-white">{name}</h4>
                    <div className="flex flex-row justify-between items-center mr-7 mt-4">
                        <div className="flex flex-row items-center ">
                            <h5 className="text-primary-blue pb-1">More Info</h5>
                            <img className="fill-current text-primary-blue " src={rightArrowFilled} alt="" />
                        </div>
                        <div className="border-l-2 border-white border-opacity-10 pl-6">
                            <img src={ticket} alt="" />
                        </div>
                    </div>
                    <h5 className="absolute top-6 left-4 px-2 py-0 bg-primary-yellow-light text-secondary-coffee ">{genres}</h5>
                </div>
            </div>

        </div>
    );
};

export default ShowCard;