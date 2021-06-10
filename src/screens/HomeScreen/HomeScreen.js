import React from 'react';
import ShowCard from './../../components/ShowCard/ShowCard';
import artist_1 from './../../images/artist_1.png'
import artist_2 from './../../images/artist_2.png'
import artist_3 from './../../images/artist_3.png'
import artist_4 from './../../images/artist_4.png'

const fakeData = {
    upComingShow: [
        {
            _id: '1',
            profilePic: artist_1,
            name: 'Benny Dayal',
            genres: 'Folks',

        },
        {
            _id: '2',
            profilePic: artist_2,
            name: 'Vijay Yesudas',
            genres: 'Bollywood',

        },
        {
            _id: '3',
            profilePic: artist_3,
            name: 'Andrea Jeremiah',
            genres: 'Folks',

        },
        {
            _id: '4',
            profilePic: artist_4,
            name: 'Shilpa Rao',
            genres: 'Folks',

        },
    ]
}


const HomeScreen = () => {
    console.log(fakeData.upComingShow[0].profilePic)
    return (
        <div className="bg-primary-ebony_black-hard">
            {
                fakeData.upComingShow.map(
                    show => <ShowCard key={show._id} showInfo={show} />
                )
            }
            {/* <img src={fakeData.upComingShow[0].profilePic} alt="" /> */}
        </div>
    );
};

export default HomeScreen;