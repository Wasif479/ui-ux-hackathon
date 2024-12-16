import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-100 font-title">
      <div className="w-full max-w-full lg:max-w-3xl p-4 rounded-md bg-white shadow-md flex flex-col items-center">
        <div className="flex justify-between items-center w-full lg:w-11/12">
          <div>
            <h1 className="text-[#1A202C] text-xl font-bold">Billing Info</h1>
            <p className="text-[#90A3BF]">Please enter your billing info</p>
          </div>
          <div className="text-[#90A3BF] text-sm">Step 1 of 4</div>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center lg:w-11/12 gap-4 mt-5">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="name" className="font-title font-semibold">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="px-6 py-4 rounded-lg outline-none border bg-[#F6F7F9] w-full"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="phone" className="font-title font-semibold">Phone number</label>
              <input
                type="number"
                id="phone"
                placeholder="Phone number"
                className="px-6 py-4 rounded-lg outline-none border bg-[#F6F7F9] w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center lg:w-11/12 gap-4 mt-5">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="address" className="font-title font-semibold">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="px-6 py-4 rounded-lg outline-none border bg-[#F6F7F9] w-full"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="town-city" className="font-title font-semibold">Town / City</label>
              <input
                type="text"
                id="town-city"
                placeholder="Town / City"
                className="px-6 py-4 rounded-lg outline-none border bg-[#F6F7F9] w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-11/12 mt-6 ">
          <div className="flex justify-end">
            <Link href="/rental-info">
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
