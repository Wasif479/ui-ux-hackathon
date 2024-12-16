import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex justify-center items-center w-full  bg-gray-100 font-title h-screen'>
        <div className='w-full max-w-full lg:max-w-3xl p-4 rounded-md bg-white shadow-md flex flex-col items-center'>
        <div className="flex justify-between items-center w-full lg:w-11/12">
          <div className='w-2/3'>
            <h1 className="text-[#1A202C] text-xl font-bold">Confirmation</h1>
            <p className="text-[#90A3BF] text-sm lg:text-base">We are getting to the end. Just few clicks and your rental is ready!</p>
          </div>
          <div className="text-[#90A3BF] text-sm">Step 4 of 4</div>
        </div>
        <div className='flex mt-6 h-14 px-4 rounded-lg w-full lg:w-11/12  justify-between items-center bg-[#F6F7F9]'>
           <div className='flex justify-start items-center gap-x-5 w-full lg:w-11/12 font-title font-semibold '>
           <input type="checkbox" className='w-5 h-5   bg-white border-2 border-gray-400 rounded checked:blue-600' />
           <h1 className='text-sm'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</h1>
           </div>
           
           <div>

           </div>
        </div>

        <div className='flex mt-6 h-14 px-4 rounded-lg w-full lg:w-11/12  justify-between items-center bg-[#F6F7F9]'>
           <div className='flex justify-start items-center gap-x-5 w-full lg:w-11/12 font-title font-semibold '>
           <input type="checkbox" className='w-5 h-5   bg-white border-2 border-gray-400 rounded checked:blue-600' />
           <h1 className='text-sm'>I agree with our terms and conditions and privacy policy.</h1>
           </div>
           
           <div>

           </div>
        </div>
        <div className='flex justify-start items-start w-full  lg:w-11/12'>

       <Button className='mt-6 px-8 py-7 rounded-xl text-white bg-[#3563E9] text-base'>
       Rent Now
       </Button>
        </div>

        <div className='flex flex-col justify-start items-start w-full  lg:w-11/12 mt-6'>
            <Image src={"/security.png"} alt='' width={32} height={32}/>
            <h1 className='text-lg font-semibold mt-2'>All your data are safe</h1>
            <p className='text-sm text-[#90A3BF]'>We are using the most advanced security to provide you the best experience ever.</p>
        </div>
        </div>
    </div>
  )
}
