import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [tag, setTag] = useState('car');

    const { gif, loading, fetchData } = useGif(tag);

    return (

        <div className='lg:w-1/2 w-full bg-blue-500 rounded-xl border border-black
      flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 className='mt-[15px] text-xl md:text-2xl underline uppercase font-bold'> Random {tag} Gif </h1>

            {
                loading ? (<spinner />) : (<img src={gif} width="450" />)
            }
            <input
                className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />

            <button onClick={() => fetchData(tag)}
                className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] uppercase  font-medium tracking-wide">
                Generate
            </button>
            
        </div>
    )
}

export default Tag