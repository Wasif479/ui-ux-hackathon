// PixelPerfectComponent.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';


 

const RentalSummary = ()=> {
  return (
    <div className='flex justify-center items-center w-full'>

    <div className="max-w-lg rounded-lg overflow-hidden shadow-lg  w-full flex justify-center items-center">
     <div className='w-11/12 flex flex-col  items-center '>
       
       <div className='flex  justify-start items-center text-start w-full  font-title '>
       <h1 className='text-lg font-semibold'>Rental Summary</h1>
      </div>
      <div className='flex  justify-start items-center text-start w-full text-sm text-[#90A3BF] font-title '>
      <p>Prices may change depending on the length of the rental and the price of your rental car.</p>
      </div>
       <div className='flex  justify-start items-start w-full mt-8 gap-x-4'>
        <div className='w-1/3 h-[108px] flex justify-center items-center bg-[#3563E9] rounded-md'>
        <img src='/car1.png'/>  
        
        </div>
        <div className='flex flex-col justify-start items-start font-title w-2/3 mt-4'>
       <h1 className='text-3xl font-semibold'>Nissan GT - R</h1>
       <div className='flex flex-col md:flex-row justify-start items-start w-10/12 md:w-2/3'>
       <div className='mt-2 flex justify-start items-start  w-full '>
        <img src='/ic-star.png'/>
        <img src='/ic-star.png'/>
        <img src='/ic-star.png'/>
        <img src='/ic-star.png'/>
        <img src='/ic-star2.png'/>
       
       </div>
       <div className='w-full  text-xs flex justify-start items-start text-center  mt-2'>
       440+ Reviewer
       </div>

       </div>
        </div>

        
       </div>
       
       <div className='flex justify-between items-center w-full mt-7  border-t-2 pt-5'>
          <h1 className='text-[#90A3BF] font-title font-semibold'>Subtotal </h1>
          <p className='font-title font-semibold'>$80.00</p>
        </div>
        <div className='flex justify-between items-center w-full mt-2 mb-10'>
          <h1 className='text-[#90A3BF] font-title font-semibold'>Tax </h1>
          <p className='font-title font-semibold'>$0</p>
        </div>
        <div className='flex justify-between items-center w-11/12 h-14 bg-gray-200 rounded-md font-title px-5'>
        <h1 className='text-[#90A3BF] text-sm '>Apply Promo Code</h1>
        <h1 className='font-semibold font-title'>Apply Now</h1>
        </div>

        <div className='flex justify-between items-center w-full mt-8 mb-10'>
          <div className='flex justify-start items-start flex-col'>
             <h1 className='text-black font-title font-bold'>Total Rental Price </h1>
             <p className='font-title text-sm text-[#90A3BF]'>Overall price and includes rental discount</p>
          </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-3xl font-bold font-title'>$80.00</h1>
          </div>
         
         
        </div>
        <div className='flex justify-end items-center w-full mb-5' >
          <Link href={"/billing-info"}>
          
            <Button className='w-56 h-12 bg-[#3563E9] font-title hover:bg-blue-700 text-lg'>Next</Button>
          </Link>
          </div>

     </div>
    </div>
    </div>
      
     
  );
};

export default RentalSummary;
