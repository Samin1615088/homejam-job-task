import React from 'react';
import ShowCard from '../ShowCard/ShowCard';
import SubLabel from '../SubLabel/SubLabel';

const ShowSection = (props) => {
    const shows = props.upcomingShows;
    console.log()
    return (
        <section>
            <SubLabel content={"Upcoming Shows"} />

            <div className="flex flex-wrap justify-around mt-10 md:px-28">
                {
                    shows.map(show => <ShowCard key={show._id} showInfo={show} />)
                }
            </div>
        </section>
    );
};

export default ShowSection;