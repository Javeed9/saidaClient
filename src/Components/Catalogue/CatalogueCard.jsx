import React from "react";
import { Link } from "react-router-dom";

function CatalogueCard({ name, imageSrc }) {
  return (
    <Link to={`category/${name}`} className="flex mx-3 my-4">
      <div className='box-border p-4 bg-slate-300 transform transition duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-orange-700 '>
        <img
          className="w-72 h-72 border border-solid "
          src={imageSrc}
          alt="catalougeImage"
        />
        <h2 className="text-center text-lg mt-3 font-bold text-black">{name}</h2>
      </div>
    </Link>
  );
}

export default CatalogueCard;
