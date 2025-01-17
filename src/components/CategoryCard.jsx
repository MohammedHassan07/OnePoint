import React from 'react';

const CategoryCard = ({ category, categoryImg }) => {
    return (
        <div className="flex flex-col items-center flex-wrap cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 sm:flex-row sm:items-center">
            <img
                className="w-24 h-24 sm:w-36 sm:h-36 object-cover rounded-full border-2 border-gray-200"
                src={categoryImg}
                alt={category}
            />
            <div className="mt-3 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <p className="text-lg font-semibold text-gray-700">{category}</p>
            </div>
        </div>
    );
};

export default CategoryCard;
