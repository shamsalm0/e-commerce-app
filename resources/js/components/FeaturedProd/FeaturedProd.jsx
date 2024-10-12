import React from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
const FeaturedProd = () => {
    return (
        <div className='mx-auto mt-20'>
               <div className='flex   lg:justify-between justify-between items-center mx-auto lg:flex-row-auto mb-8 w-full btn-container'>
        <h2 className='text-[#262626] text-xl lg:text-2xl font-serif font-bold lg:ml-36'>Featured</h2>
        <div className=' mr-0 flex lg:mr-36'>
    <button className='w-[79px] h-[23px] bg-black text-[#FF7F3C] transform skew-x-12 mr-1'>See All</button>
          <button className='h-[23px] w-[34px] text-center bg-[#FF7F3C] transform skew-x-12  mr-1' ><MdArrowForwardIos className='ml-3 text-white'/></button>
        <button className='h-[23px] w-[34px] text-center bg-[#FF7F3C] skew-x-12' ><MdArrowBackIos className='ml-3 text-center text-white'/></button>
  </div>
      </div>
        </div>
    );
};

export default FeaturedProd;