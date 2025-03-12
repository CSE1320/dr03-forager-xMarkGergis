import Link from "next/link";
import MushroomCard from "./MushroomCard";

const MushroomList = ({ mushrooms }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {mushrooms.map((mushroom, index) => (
        <Link
          key={index}
          href={{
            pathname: "/mushroom",
            query: {
              name: mushroom.name,
              scientificName: mushroom.scientificName,
              image: mushroom.image,
              match: mushroom.matchPercentage,
              danger: mushroom.danger,
              facts: JSON.stringify(mushroom.facts),
            },
          }}
          className="block"
        >
          <MushroomCard
            name={mushroom.name}
            image={mushroom.image}
            matchPercentage={mushroom.matchPercentage}
            danger={mushroom.danger}
          />
        </Link>
      ))}
    </div>
  );
};

export default MushroomList;
