import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import SubLabel from '../SubLabel/SubLabel';

const ReviewSection = (props) => {
    const reviews = props.reviews;
    console.log(reviews)
    return (
        <section>
            <SubLabel content={"Reviews"} />

            <div className="flex flex-wrap justify-around mt-10 md:px-28">
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}/>)
                }
            </div>
        </section>
    );
};

export default ReviewSection;