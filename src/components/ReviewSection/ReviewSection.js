import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import SubLabel from '../SubLabel/SubLabel';

const ReviewSection = (props) => {
    const reviews = props.reviews;
    console.log(reviews)
    return (
        <section>
            <SubLabel content={"Reviews"} />

            <div className="grid justify-around grid-cols-1 gap-6 px-8 mt-10 md:grid-cols-2 lg:grid-cols-3 md:px-28 lg:px-48">
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}/>)
                }
            </div>
        </section>
    );
};

export default ReviewSection;