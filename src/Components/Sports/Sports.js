import React from 'react';

const Sports = ({ sports }) => {
    const { strFormat, strSport, strSportIconGreen, strSportThumb, strSportDescription } = sports
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={strSportThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><img className='bg-white rounded-xl' src={strSportIconGreen} alt="" />{strSport}</h2>
                    <p>{strFormat}</p>
                </div>
            </div>
        </div>
    );
};

export default Sports;