import React, { useState } from 'react';
import dummyPic from './../../images/artist_1.png'
import ticket from './../../images/icons/icon_ticket.svg'
import ticketFilled from './../../images/icons/icon_ticket_filled.svg'
import rightArrowFilled from './../../images/icons/icon_right_arrow_filled.svg'

const ShowCard = (props) => {
    const { profilePic, name, genres } = props.showInfo;
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle)

    return (
        <div className="relative card--size bg-secondary-coffee bg-gradient-to-r from-gradient-blue1 to-gradient-blue2" onClick={handleToggle}>
            <div className="absolute card card--size top-2 right-2">
                <img className="object-cover h-56 " src={profilePic} alt="" />
                <div className="relative h-full pl-4 bg-primary-ebony_black-light pt-14">
                    <h4 className="text-xl font-bold text-white font-libre">{name}</h4>
                    <div className="flex flex-row items-center justify-between mt-4 mr-7">
                        <div className="flex flex-row items-center ">
                            <h5 className="pb-1 text-primary-blue">More Info</h5>
                            <img className="fill-current text-primary-blue " src={rightArrowFilled} alt="" />
                        </div>
                        <div className="pl-6 border-l-2 border-white border-opacity-10">
                            {
                                toggle ?
                                    (<img src={ticket} alt="" />)
                                    :
                                    (<img src={ticketFilled} alt="" />)
                            }
                        </div>
                    </div>
                    <h5 className="absolute px-2 py-0 top-6 left-4 bg-primary-yellow-light text-secondary-coffee ">{genres}</h5>
                </div>
            </div>

        </div>
    );
};

export default ShowCard;