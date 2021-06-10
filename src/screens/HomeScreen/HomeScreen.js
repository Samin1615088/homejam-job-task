import React from 'react';
import ShowSection from '../../components/ShowSection/ShowSection';
import Header from '../../components/Header/Header';
import ReviewSection from '../../components/ReviewSection/ReviewSection';
import artist_1 from './../../images/artist_1.png'
import artist_2 from './../../images/artist_2.png'
import artist_3 from './../../images/artist_3.png'
import artist_4 from './../../images/artist_4.png'
import profile_1 from './../../images/profile_1.svg'
import profile_2 from './../../images/profile_2.svg'
import profile_3 from './../../images/profile_3.svg'
import usFlag from './../../images/icons/icon_us_flag.svg'
import itFlag from './../../images/icons/icon_it_flag.svg'

const fakeData = {
    upComingShows: [
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
    ],
    reviews: [
        {
            _id: '5',
            profilePic: profile_1,
            name: 'Hellen Jummy',
            country: 'PALO ALTO, CA',
            flag: usFlag,

        },
        {
            _id: '6',
            profilePic: profile_2,
            name: 'Isaac Oluwatemilorun',
            country: 'PALO ALTO, CA',
            flag: itFlag,

        },
        {
            _id: '7',
            profilePic: profile_3,
            name: 'Hellen Jummy',
            country: 'PALO ALTO, CA',
            flag: usFlag,

        },
    ]
}


const HomeScreen = () => {
    return (
        <div className="bg-primary-ebony_black-hard ">
            <Header />
            <ShowSection upcomingShows={fakeData.upComingShows} />
            <ReviewSection reviews={fakeData.reviews} />
        </div>
    );
};

export default HomeScreen;