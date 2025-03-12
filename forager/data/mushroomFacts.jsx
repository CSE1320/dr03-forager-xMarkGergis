const mushroomFacts = {
    "Death Cap": {
      scientificName: "Amanita phalloides",
      image: "/images/death-cap.png",
      matchPercentage: 97,
      danger: true,
      facts: [
        "Cap Diameter: 5-15cm",
        "Gill Color: White",
        "Stem Color: White",
        "Habitat: Temperate regions",
      ],
    },
    "Paddy Straw": {
      scientificName: "Volvariella volvacea",
      image: "/images/paddy-straw.png",
      matchPercentage: 90,
      danger: false,
      facts: [
        "Cap Diameter: 6-12cm",
        "Grown in tropical climates",
        "Popular in Asian cuisine",
      ],
    },
    "Destroying Angel": {
      scientificName: "Amanita virosa",
      image: "/images/destroying-angel.png",
      matchPercentage: 80,
      danger: true,
      facts: [
        "Cap Diameter: 5-10cm",
        "Gill Color: White",
        "Stem Color: White",
        "Highly toxic, fatal if ingested",
      ],
    },
    "False Death Cap": {
      scientificName: "Amanita citrina",
      image: "/images/false-death-cap.png",
      matchPercentage: 70,
      danger: false,
      facts: [
        "Cap Diameter: 5-10cm",
        "Often mistaken for Death Cap",
        "Mildly toxic, but not lethal",
      ],
    },
    "Puffball": {
      scientificName: "Lycoperdon perlatum",
      image: "/images/puffball.png",
      matchPercentage: 60,
      danger: false,
      facts: [
        "Cap Diameter: 4-8cm",
        "Edible when young",
        "Releases spores when mature",
      ],
    },
  };
  
  export default mushroomFacts;
  