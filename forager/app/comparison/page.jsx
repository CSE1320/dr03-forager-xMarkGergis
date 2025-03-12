"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import Message from "../../components/Message"; 
import comparisonMushrooms from "../../data/comparisonMushrooms";

export default function ComparisonPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedMushroom = searchParams.get("mushroom");
  const yourPhoto = "your-photo.png";

  const yourMushroomData = comparisonMushrooms[yourPhoto] || {};
  const comparedMushroomData = selectedMushroom
    ? comparisonMushrooms[selectedMushroom]
    : null;

  if (!comparedMushroomData) {
    return (
      <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-xl font-bold">Mushroom comparison data not found.</h1>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-gray-100">
      <div className="bg-green-700 text-white p-4 flex items-center">
        <FaArrowLeft className="text-xl cursor-pointer" onClick={() => router.back()} />
        <h1 className="text-xl font-bold mx-auto">Compare</h1>
      </div>

      {selectedMushroom === "death-cap.png" && (
        <div className="mx-4 mt-3">
          <Message />
        </div>
      )}

      <div className="flex justify-center items-center gap-4 mx-4 mt-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src={`/images/${yourPhoto}`} alt="Your Photo" className="w-36 h-36 rounded-lg" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src={`/images/${selectedMushroom}`} alt="Compared Mushroom" className="w-36 h-36 rounded-lg" />
        </div>
      </div>

        <div className="mx-4 mt-4 bg-white p-4 rounded-lg shadow-lg">
            <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Your Photo</th>
                <th className="py-2 text-center pl-6">Attribute</th> {/* Added pl-6 to push right */}
                <th className="py-2 text-right">{selectedMushroom.replace(".png", "").replace("-", " ")}</th>
              </tr>
            </thead>
          <tbody>
            {Object.keys(yourMushroomData).map((key, index) => {
              const [editableValues, setEditableValues] = useState(yourMushroomData);

              const handleInputChange = (event, attribute) => {
                setEditableValues({ ...editableValues, [attribute]: event.target.value });
              };

              return (
                <tr key={index} className="border-b">
                  <td className="py-2 text-left">
                    <input
                      type="text"
                      value={editableValues[key]}
                      onChange={(e) => handleInputChange(e, key)}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  </td>
                  <td className="py-2 font-bold text-center pl-6">{key.replace(/([A-Z])/g, " $1")}</td>
                  <td className="py-2 text-right">{comparedMushroomData[key]}</td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
      <NavBar />
    </div>
  );
}
