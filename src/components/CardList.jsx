import React from 'react';
import personImg from '../icons/people.png';

const CardList = (card) => {

    console.log(card.card.name)
    // function to make call
    function handleCall(phone) {
        console.log(phone)
    }

    return (
        <div className="max-w-sm mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-4">
                <img
                    src={personImg}
                    alt="Person"
                    className="w-24 h-24 rounded-full border-4 border-gray-200 object-cover mb-4 sm:mb-0"
                />
                <div className="text-center sm:text-left">
                    <p className="text-xl font-semibold mb-2 text-gray-800">{card.card.name}</p>
                    <p className="text-sm text-gray-600">
                        {card.card.address}
                    </p>
                </div>
            </div>
            <div className="mt-4 flex justify-center sm:justify-end ">
                <button className="bg-green-800 text-white font-medium px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 cursor-pointer" onClick={() => handleCall(card.card.phone)}>
                    Call
                </button>
            </div>
        </div>
    );
};

export default CardList;
