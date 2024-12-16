import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div  className="flex justify-center items-center w-full  bg-gray-100 font-title">
        <div className="w-full max-w-full lg:max-w-3xl p-4 rounded-md bg-white shadow-md flex flex-col items-center">
        <div className="flex justify-between items-center w-full lg:w-11/12">
          <div>
            <h1 className="text-[#1A202C] text-xl font-bold">Payment Method</h1>
            <p className="text-[#90A3BF]">Please enter your payment method</p>
          </div>
          <div className="text-[#90A3BF] text-sm">Step 3 of 4</div>
        </div>
        <div className='w-full max-w-full lg:max-w-2xl px-1 py-4 rounded-md bg-[#F6F7F9] flex flex-col items-center mt-5'>

        <div className='flex justify-between items-center gap-x-2 w-full lg:w-11/12 font-title font-semibold  '>
            <div className='flex justify-start items-center gap-x-2 w-full lg:w-11/12 font-title font-semibold'> 
              <input type="radio" className='' defaultChecked={true}/>
            <h1>Credit Card</h1>  
            </div>
            <div className='flex justify-end items-center gap-x-2 w-full lg:w-11/12 font-title font-semibold '> 
             <Image src={"/Visa.png"} alt='' width={80} height={80}/>
            </div>
            
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center lg:w-11/12 gap-4 mt-5">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="Card Number" className="font-title font-semibold">Card Number</label>
              <input
                type="number"
                id="Card Number"
                placeholder="Card number"
                className="px-6 py-4 rounded-lg outline-none border bg-white w-full"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="Expration Date" className="font-title font-semibold">Expration Date</label>
              <input
                type="tel"
                id="Expration Date"
                placeholder="DD / MM / YY"
                className="px-6 py-4 rounded-lg outline-none border bg-white w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center lg:w-11/12 gap-4 mt-5">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="Card Holder" className="font-title font-semibold">Card Holder</label>
              <input
                type="text"
                id="Card Holder"
                placeholder="Card Holder"
                className="px-6 py-4 rounded-lg outline-none border bg-white w-full"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="CVC" className="font-title font-semibold">CVC</label>
              <input
                type="number"
                id="CVC"
                placeholder="CVC"
                className="px-6 py-4 rounded-lg outline-none border bg-white w-full"
              />
            </div>
          </div>
        </div>

        
        </div>
        <div className='flex mt-6 h-14 px-4 rounded-lg w-full lg:w-11/12  justify-between items-center bg-[#F6F7F9]'>
           <div className='flex justify-start items-center gap-x-5 w-full lg:w-11/12 font-title font-semibold '>
           <input type="radio" className='w-5 h-5' />
           <h1>PayPal</h1>
           </div>
           <div className='justify-end'><Image src={"/PayPal.png"} alt='' width={100} height={100}/></div>
           <div>

           </div>
        </div>
        <div className='flex mt-6 h-14 px-4 rounded-lg w-full lg:w-11/12  justify-between items-center bg-[#F6F7F9]'>
           <div className='flex justify-start items-center gap-x-5 w-full lg:w-11/12 font-title font-semibold '>
           <input type="radio" className='w-5 h-5'/>
           <h1>Bitcoin</h1>
           </div>
           <div className='justify-end'><Image src={"/Bitcoin.png"} alt='' width={100} height={100}/></div>
           <div>

           </div>
        </div>
        <div className="w-full lg:w-11/12 mt-6 lg:px-4">
          <div className="flex justify-end">
            <Link href="/confirmation">
              <Button className=" w-40 lg:w-52 h-12 bg-[#3563E9] font-title hover:bg-blue-700 text-lg">
                Next
              </Button>
            </Link>
          </div>
        </div>
        </div>
    </div>
  )
}
