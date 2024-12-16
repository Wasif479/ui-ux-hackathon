import CarCard from "./components/CarCard";


export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <CarCard
        name="CR - V"
        type="SUV"
        image="/Car.png"
        fuelCapacity="80L"
        transmission="Manual"
        seating="6 People"
        price="$80.00"
      />
    </div>
  );
}

