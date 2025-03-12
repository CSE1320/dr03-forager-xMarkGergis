"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import mushroomFacts from "../../data/mushroomFacts";
import Message from "../../components/Message"; 

export default function MushroomPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const name = searchParams.get("name");

  const mushroom = name ? mushroomFacts[name] : null;

  if (!mushroom) {
    return (
      <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-xl font-bold">Mushroom not found.</h1>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-gray-100">
      <div className="bg-green-700 text-white p-4 flex items-center">
        <FaArrowLeft className="text-xl cursor-pointer" onClick={() => router.back()} />
        <h1 className="text-xl font-bold mx-auto">Match Results</h1>
      </div>

      <div className="px-4 mt-2 flex justify-between items-center">
        <p className="text-sm text-gray-600">Not what you expected?</p>
        <button className="bg-red-500 text-white px-3 py-1 text-sm rounded-lg">Report Error</button>
      </div>

      {mushroom.danger && (
        <div className="mx-4 mt-3"> 
          <Message />
        </div>
      )}

      <div className="mx-4 mt-4 bg-white p-3 rounded-lg shadow-lg">
        <div className="relative">
          <img src={mushroom.image} alt={name} className="w-full h-auto rounded-lg" />
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded-lg flex items-center">
            {mushroom.matchPercentage}% Match
          </div>
        </div>
      </div>

      <div className="px-4 mt-3 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-500 italic">{mushroom.scientificName}</p>
        </div>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center"
          onClick={() =>
            router.push(
              `/comparison?mushroom=${encodeURIComponent(mushroom.image.split('/').pop())}`
            )
          }
        >
          <FaPlus className="mr-2" /> Compare
        </button>
      </div>

      {/* Fast Facts */}
      <div className="bg-red-900 text-white p-4 mx-4 mt-3 rounded-lg">
        <h3 className="font-bold text-lg">Fast Facts</h3>
        <ul className="list-disc list-inside">
          {mushroom.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      <NavBar />
    </div>
  );
}
