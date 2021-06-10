import React from 'react';

const SubLabel = () => {
    return (
        <div className="flex items-center justify-between px-4 mt-12 text-white md:px-28" >
            <div className="">
                <h1 className="inline-block text-3xl font-libre font-400">Upcoming Shows</h1>
                <div className="w-12 h-1 mt-1 bg-primary-blue" />
            </div>
            <h4 className="text-base text-primary-yellow-light font-nunito font-600">View All</h4>
        </div>
    );
};

export default SubLabel;