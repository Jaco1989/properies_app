'use client';
import { FaBookmark } from 'react-icons/fa';
import { useState } from 'react';

const BookmarkButton = ({ property }) => {

    const [isBookMark, setIsBookMark] = useState(false)

  return(
    <>
    {isBookMark 
        ? (<>
            <button
                onClick={handleClick}
                className='bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'
    >
                <FaBookmark className='mr-2' /> Remove Bookmark
            </button>
            </>) 

        : (<>
            <button
            onClick={() => {}}
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'
    >
            <FaBookmark className='mr-2' /> Bookmark Property
            </button>
            </>)}
    
    
    </>
  )
   
  
};
export default BookmarkButton;