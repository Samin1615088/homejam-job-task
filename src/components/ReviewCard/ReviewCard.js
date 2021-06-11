import React from 'react';


const ReviewCard = (props) => {
    const {review} = props;
    return (
        <div className="relative my-4 sm:my-8 reviewCard--size bg-gradient-to-r from-gradient2-color1 to-gradient2-color2 ">
            <div className="absolute border-2 card reviewCard--size top-2 right-2 border-primary-yellow-hard ">
                <div className="h-full bg-primary-ebony_black-hard ">
                    <div className="flex pt-8 pl-6 flex-nowrap">
                        <img src={review.profilePic} alt="" />
                        <div className="pl-4">
                            <h3 className="text-base text-white font-700 font-quattrocento">{review.name}</h3>
                            <div>
                                <img src={review.flag} alt="" className="inline-block" />
                                <h4 className="inline-block pl-2 text-xs text-white uppercase text-primary-yellow-light font-rubik font-400">{review.country}</h4>
                            </div>
                        </div>
                    </div>
                    <h3 className="px-2 ml-6 text-base text-white font-nunito font-400 mt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in  vitae. Vestibulum pellentesque eget laoreet adipiscing.</h3>
                </div>

            </div>
        </div>
    );
};

export default ReviewCard;