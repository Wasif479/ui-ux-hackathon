"use client"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
export default function page() {
    const [date, setDate] = React.useState()
  return (
    <div className="flex justify-center items-center w-full  bg-gray-100 font-title">
      <div className="w-full max-w-full lg:max-w-3xl p-4 rounded-md bg-white shadow-md flex flex-col items-center">
        <div className="flex justify-between items-center w-full lg:w-11/12">
          <div>
            <h1 className="text-[#1A202C] text-xl font-bold">Rental Info</h1>
            <p className="text-[#90A3BF]">Please select your rental date</p>
          </div>
          <div className="text-[#90A3BF] text-sm">Step 2 of 4</div>
        </div>
        <div className='flex justify-start items-center gap-x-2 w-full lg:w-11/12 font-title font-semibold mt-6'>
            <input type="radio" className='' defaultChecked={true}/>
            <h1>Pick - Up</h1>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center lg:w-11/12  gap-4 mt-5">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="name" className="font-title font-semibold">Location</label>
              <Select className="outline-none"
         >
      <SelectTrigger className="px-6 py-4 h-16 rounded-lg outline-none border bg-[#F6F7F9] w-full ">
        <SelectValue placeholder="Select a city" className='text-gray-60'/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cities</SelectLabel>
          <SelectItem value="karachi">Karachi</SelectItem>
          <SelectItem value="lahore">Lahore</SelectItem>
          <SelectItem value="islamabad">Islamabad</SelectItem>
          <SelectItem value="sialkot">Sialkot</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="phone" className="font-title font-semibold">Date</label>
              <Popover className="w-full">
  <PopoverTrigger
    asChild
    className="px-6 py-4 h-16 rounded-lg outline-none border bg-[#F6F7F9] w-full"
  >
    <Button
      variant={"outline"}
      className={cn(
        "w-full lg:w-full justify-start text-left font-normal",
        !date && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, "PPP") : <span>Pick a date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-full max-w-sm lg:max-w-md">
    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
  </PopoverContent>
</Popover>

            </div>
          </div>

         
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center lg:w-11/12 gap-4 mt-5 ">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:pr-[6px]">
            <div className="grid w-full max-w-sm items-center gap-1.5  ">
              <label htmlFor="address" className="font-title font-semibold">Time</label>
              <Select className="outline-none "
         >
      <SelectTrigger className="px-6 py-4 h-16 rounded-lg outline-none border bg-[#F6F7F9] w-full ">
        <SelectValue placeholder="Select a time" className='text-gray-60'/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Time</SelectLabel>
          <SelectItem value="9:00am">9:00am</SelectItem>
          <SelectItem value="10:00am">10:00am</SelectItem>
          <SelectItem value="11:00am">11:00am</SelectItem>
          <SelectItem value="12:00am">12:00am</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
          </div>

         
        </div>

        <div className='flex justify-start items-center gap-x-2 w-full lg:w-11/12 font-title font-semibold mt-6'>
            <input type="radio" className='' defaultChecked={true} />
            <h1>Drop - Off</h1>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center lg:w-11/12 gap-4 mt-5">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="name" className="font-title font-semibold">Location</label>
              <Select className="outline-none"
         >
      <SelectTrigger className="px-6 py-4 h-16 rounded-lg outline-none border bg-[#F6F7F9] w-full ">
        <SelectValue placeholder="Select a city" className='text-gray-60'/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cities</SelectLabel>
          <SelectItem value="karachi">Karachi</SelectItem>
          <SelectItem value="lahore">Lahore</SelectItem>
          <SelectItem value="islamabad">Islamabad</SelectItem>
          <SelectItem value="sialkot">Sialkot</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="phone" className="font-title font-semibold">Date</label>
              <Popover className="w-full">
  <PopoverTrigger
    asChild
    className="px-6 py-4 h-16 rounded-lg outline-none border bg-[#F6F7F9] w-full"
  >
    <Button
      variant={"outline"}
      className={cn(
        "w-full lg:w-full justify-start text-left font-normal",
        !date && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, "PPP") : <span>Pick a date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-full max-w-sm lg:max-w-md">
    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
  </PopoverContent>
</Popover>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center lg:w-11/12 gap-4 mt-5 ">
          <div className="w-full lg:w-1/2 flex flex-col items-center  lg:pr-[6px]">
            <div className="grid w-full max-w-sm items-center gap-1.5 ">
              <label htmlFor="address" className="font-title font-semibold">Time</label>
              <Select className="outline-none "
         >
      <SelectTrigger className="px-6 py-4 h-16 rounded-lg outline-none border bg-[#F6F7F9] w-full ">
        <SelectValue placeholder="Select a time" className='text-gray-60'/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Time</SelectLabel>
          <SelectItem value="9:00am">9:00am</SelectItem>
          <SelectItem value="10:00am">10:00am</SelectItem>
          <SelectItem value="11:00am">11:00am</SelectItem>
          <SelectItem value="12:00am">12:00am</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
          </div>

         
        </div>


        <div className="w-full lg:w-11/12 mt-6 lg:px-4">
          <div className="flex justify-end">
            <Link href="/payment-method">
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
