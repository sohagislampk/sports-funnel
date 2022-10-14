import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sports from '../Sports/Sports';

const Home = () => {
    const data = useLoaderData();
    const allSports = data.sports
    console.log(allSports);
    return (
        <div className='grid grid-cols-3 gap-2 mx-10 my-5'>
            {
                allSports.map(sports =>
                    <Sports
                        key={sports.idSport}
                        sports={sports}

                    ></Sports>
                )
            }
        </div>
    );
};

export default Home;