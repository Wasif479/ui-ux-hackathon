import Image from "next/image";
import Link from "next/link";
import React from "react";


interface CarCardProps {
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  seating: string;
  price: string;
}

const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  seating,
  price,
}) => {
  return (
    <>
    {/* web view */}
    <div className={`font-title max-w-sm w-full rounded-lg shadow-md bg-white p-4 relative hidden lg:flex flex-col`}>
      {/* Heart Icon */}
      <div className="absolute top-4 right-4 text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-80 object-contain mb-4"
      />
      {/* Car Info */}
      <div className="">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500 text-sm">{type}</p>
      <div className="flex justify-between items-center mt-4 text-gray-600">

      <div className="flex items-center space-x-2 text-[#90A3BF]">
          <Image src={"/gas-station.png"} alt="" width={24} height={24}  />
          <span>{fuelCapacity}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Image src="/mileage.png"  alt="" width={24} height={24}/>
          <span>{transmission}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Image src="/profile.png" alt=""  width={24} height={24} quality={100}/>
            <path d="M3 10v11h18V10zm16 9H5v-7h14zm-3-12H8v-3h8z" />
          
          <span>{seating}</span>
        </div>


      </div>

      </div>
      {/* Pricing */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-[#90A3BF] font-semibold"><span className="font-bold text-gray-800 text-xl">{price}/</span>day</p>
        <Link href={"/rental-summary"}>
        <button className="px-5 py-3 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition">
          Rent Now
        </button>
        </Link>
      </div>
    </div>
    {/* mobile view */}
    <div className="flex font-title lg:hidden flex-col justify-center items-center bg-white h-80 ">
        <div className="flex  justify-between items-center w-10/12  mb-5">
         <div className="flex flex-col">
         <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500 text-sm">{type}</p>

         </div>
         {/* Heart Icon */}
      <div className=" text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
        </div>
        <div className="flex w-11/12 gap-x-5">
        <div className="w-2/3  flex flex-col justify-center  items-center">
        <img
        src={image}
        alt={name}
        className="w-full h-28 object-contain mb-4"
      />
        </div>
        <div className="flex flex-col  w-1/3 justify-center items-center  ">
        
     
      <div className="flex flex-col justify-start items-start gap-y-4 text-gray-600  mb-12">
        <div className="flex items-center space-x-2">
          <img src={"/gas-station.png"} />
          <span>{fuelCapacity}</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/mileage.png"/>
          <span>{transmission}</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/profile.png" alt="" />
            <path d="M3 10v11h18V10zm16 9H5v-7h14zm-3-12H8v-3h8z" />
          
          <span>{seating}</span>
        </div>
      </div>

      
        </div>
        </div>
        <div className="flex w-10/12 ">
        <div className="mt-4 flex justify-between items-center w-full">
        <p className="text-xl font-semibold text-[#1A202C]"><span className="font-bold">{price}/</span>day</p>
        <Link href={"/rental-summary"}>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition">
          Rent Now
        </button>
        </Link>
      </div>
        </div>

    </div>
    </>
  );
};

export default CarCard;
