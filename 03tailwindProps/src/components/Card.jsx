import React from "react";

function Card({name, btnText='no'}) {
    return (
            <div className='bg-white rounded-2xl shadow-lg p-6 w-72'>
                <img
                    src='https://picsum.photos/300/200'
                    alt='card'
                    className='rounded-xl w-full object-cover mb-4'
                />

                <p className='text-gray-500 text-sm'>
                    This is a random card built with Tailwind CSS. Pretty clean, right?
                </p>
                <button className='mt-4 w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl transition'>
                    {name}
                </button>
                <button className='mt-4 w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl transition'>
                    {btnText}
                </button>
            </div>
    )
}

export default Card