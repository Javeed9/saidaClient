import React from "react";
import CatalogueCard from "./CatalogueCard";
import product1 from "./img/catlogueItem1.jpg";
import product2 from "./img/catlogueItem2.jpg";
import product3 from "./img/catlogueItem3.jpg";
import product4 from "./img/catlogueItem4.jpg";
import product5 from "./img/catlogueItem5.jpg";
import product6 from "./img/catlogueItem6.jpg";
import product7 from "./img/catlogueItem7.jpg";
import product8 from "./img/catlogueItem8.jpg";
import product9 from "./img/catlogueItem9.jpg";
import product10 from "./img/catlogueItem10.jpg";

const products = [
  {
    id: 0,
    name: "Necklaces",
    imageSrc: product1,
  },
  {
    id: 1,
    name: "Rings",
    imageSrc: product2,
  },
  {
    id: 2,
    name: "Bangles",
    imageSrc: product3,
  },
  {
    id: 3,
    name: "Pendants",
    imageSrc: product4,
  },
  {
    id: 4,
    name: "Chains",
    imageSrc: product5,
  },
  {
    id: 5,
    name: "Ear Rings",
    imageSrc: product6,
  },
  {
    id: 6,
    name: "Bridal",
    imageSrc: product7,
  },
  {
    id: 7,
    name: "Bracelets",
    imageSrc: product8,
  },
  {
    id: 8,
    name: "Silver Anklets",
    imageSrc: product9,
  },
  {
    id: 9,
    name: "Other Silver",
    imageSrc: product10,
  },
];

function Catalogue() {
  return (
    <>
      <h2 className="text-center m-6 text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
        JEWELLERY CATLOUGE
      </h2>
      <div className="flex flex-wrap justify-evenly">
        {products.map((product) => (
          <CatalogueCard
            key={product.id}
            name={product.name}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </>
  );
}

export default Catalogue;
