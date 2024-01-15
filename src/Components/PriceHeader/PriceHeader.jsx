import React, { useState, useEffect } from "react";
import useAuth from "../../Shared/Hooks/Auth";
import ChangePrice from "./ChangePrice";
import "./styles.css";

function PriceHeader() {
  const [prices, setPrices] = useState({ gold: 0, silver: 0 });
  const { isAdmin } = useAuth();
  const [isChangePricesVisible, setIsChangePriceVisible] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_ROUTE + "prices"
        );
        const data = await response.json();
        if (data.length !== 0) {
          setPrices(data[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full mx-auto bg-orange-400 text-black py-1 md:text-lg">
        <div className="w-10/12 overflow-clip border border-dotted border-x-black border-y-transparent mx-auto">
          <p className="price">
            Today: Gold 22k - 1g = Rs.{prices.gold} | Silver - 1g = Rs.{prices.silver}
          </p>
        </div>
        {isAdmin && (
          <div
          className="w-full text-center">
          <button
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mt-4"
            onClick={() => {
              setIsChangePriceVisible((prev) => !prev);
            }}
            >
            Change Price
          </button>
            </div>
        )}
      </div>

      {isChangePricesVisible && (
        <ChangePrice
          setPrevPrices={setPrices}
          prevPrices={prices}
          setIsChangePriceVisible={setIsChangePriceVisible}
        />
      )}
    </>
  );
}

export default PriceHeader;
