import React from "react";
import { ArrowLeft, Camera, Image, Zap } from "lucide-react";

const BackgroundScreen = ({ image, onCapture, onGallery, onBack }) => {
  return (
    <div className="relative w-full h-screen">
      <img src={image} alt="Background" className="w-full h-full object-cover" />
      
      <div className="absolute top-4 left-4">
        <button onClick={onBack} className="text-white">
          <ArrowLeft size={24} />
        </button>
      </div>
      <div className="absolute top-4 right-4">
        <button className="text-white">
          <Zap size={24} />
        </button>
      </div>
      
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-24 h-24 border-2 border-white"></div>
      </div>
      
      <div className="absolute bottom-6 w-full flex justify-center items-center gap-8">
        <button onClick={onGallery} className="text-white">
          <Image size={32} />
        </button>
        <button onClick={onCapture} className="text-white bg-white p-3 rounded-full">
          <Camera size={32} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default BackgroundScreen;