"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaBolt, FaSync, FaImage, FaCamera } from "react-icons/fa";
import NavBar from "../../components/NavBar";

export default function PhotoSearchPage() {
  const [flashOn, setFlashOn] = useState(false);
  const router = useRouter();

  return (
    <div className="relative w-full h-screen bg-black">
      <NavBar hidden={true} />

      <div className="absolute top-4 left-4 text-white text-2xl cursor-pointer" onClick={() => router.back()}>
        <FaArrowLeft />
      </div>
      <div
        className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
        onClick={() => setFlashOn(!flashOn)}
      >
        {flashOn ? <FaBolt className="text-yellow-400" /> : <FaBolt />}
      </div>



      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-72 h-72 border-4 border-white"></div> {/* Increased size */}
      </div>

      <div className="absolute inset-0 flex justify-center items-center">
        <img src="/images/your-photo.png" alt="Mushroom Icon" className="w-[750px] h-[750px] opacity-80 object-cover" /> {/* Adjusted size */}
      </div>

      <div className="absolute bottom-20 w-full flex justify-around items-center text-white text-2xl">
        <FaImage className="cursor-pointer" />
        <div className="w-24 h-24 border-4 border-white rounded-full flex justify-center items-center">
          <FaCamera className="text-white text-4xl cursor-pointer" />
        </div>
        <FaSync className="cursor-pointer" />
      </div>
    </div>
  );
}
