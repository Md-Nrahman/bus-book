import React from "react";
import Select from "react-select";
import { useState } from "react";
import { LiaBusSolid } from "react-icons/lia";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoBoatOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";

const HomePage = () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const options = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
    {
      type: "group",
      name: "Group name",
      items: [{ name: "Spanish", value: "es" }],
    },
  ];

  const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];
  return (
    <div>
      <div
        className="flex justify-between items-center p-5 relative min-h-[60vh]"
        style={{
          background:
            "url('/assets/landscape.jpg') no-repeat bottom center/cover",
          backgroundColor: "rgba(0,0,0,0.1)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="w-screen absolute -translate-x-1/2 left-1/2 -bottom-28">
          <div className="w-full">
            <div className=" bg-morphism p-5 rounded-t-lg shadow-lg grid grid-cols-4 text-base max-w-screen-sm mx-auto">
              <button className="bg-[#004f6e] text-white border border-[#004f6e] px-5 py-2 rounded-l-lg flex justify-center items-center gap-x-2">
                <LiaBusSolid /> <span>Bus</span>
              </button>
              <button className="text-[#004f6e] border border-[#004f6e] px-5 py-2 flex justify-center items-center gap-x-2">
                <GiCommercialAirplane /> <span>Air</span>
              </button>
              <button className="text-[#004f6e] border border-[#004f6e] px-5 py-2 flex justify-center items-center gap-x-2">
                <IoBoatOutline /> <span>Ship</span>
              </button>
              <button className="text-[#004f6e] border border-[#004f6e] px-5 py-2 rounded-r-lg flex justify-center items-center gap-x-2">
                <BsBuildings /> <span>Hotel</span>
              </button>
            </div>
            <div className=" bg-morphism  p-5 rounded-lg shadow-lg max-w-screen-lg mx-auto">
              <div className="grid md:grid-cols-4 gap-x-2 gap-y-3 bg-white">
                <div className="col-span-2 flex p-2 border border-[#004f6e]">
                  <div className="w-full">
                    <h6 className="text-sm text-gray-500">From</h6>
                    <SelectSearch
                      options={options}
                      value="sv"
                      name="language"
                      placeholder="Choose your language"
                      search
                    />
                  </div>
                  <div className="w-full">
                    <h6 className="text-sm text-gray-500">To</h6>
                    <SelectSearch
                      options={options}
                      value="sv"
                      name="language"
                      placeholder="Choose your language"
                      search
                    />
                  </div>
                </div>
                <div className="col-span-2 grid grid-cols-2 p-2 border border-[#004f6e]">
                  <div className="w-full">
                    <h6 className="text-sm text-gray-500">From</h6>
                    <input
                      type="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full h-[48px]"
                    />
                  </div>
                  <div className=" h-full">
                    <h6 className="text-sm text-gray-500">To</h6>
                    <input
                      type="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full h-[48px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <button className="bg-[#004f6e] text-white px-5 py-2 rounded-lg">
                  Find Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[100px]"></div>
      <div className="bg-white px-10 py-5">
        <div className="max-w-screen-lg mx-auto my-10">
          <h1 className="text-3xl font-bold text-[#004f6e] mt-16">
            Available Offers
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto mt-5">
            <div className="w-[300px] shadow-lg rounded-lg">
              <img
                src="https://static1.bdtickets.com/aaum/promotional/ca72013c-f58f-465b-9ffb-13f34622eaf5"
                alt="offer"
                className="w-full h-[300px] object-contain rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="p-4">
                <h1 className=" text-lg">Saintmartin Paribahan Teknaf Offer</h1>
                <div className="flex justify-between items-center my-3">
                  <button className="bg-[#004f6e] text-white px-5 py-2 rounded-lg">
                    Book Now
                  </button>
                  <span className="text-center">
                    <h6 className="line-through text-xs">BDT 2200</h6>
                    <h4 className="text-lg">BDT 1900</h4>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-lg rounded-lg">
              <img
                src="https://static1.bdtickets.com/aaum/banners/009483e7-82c3-4f27-bb61-e2158b6baa88"
                alt="offer"
                className="w-full h-[300px] object-contain rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="p-4">
                <h1 className=" text-lg">Saintmartin Paribahan Teknaf Offer</h1>
                <div className="flex justify-between items-center my-3">
                  <button className="bg-[#004f6e] text-white px-5 py-2 rounded-lg">
                    Book Now
                  </button>
                  <span className="text-center">
                    <h6 className="line-through text-xs">BDT 2200</h6>
                    <h4 className="text-lg">BDT 1900</h4>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-lg rounded-lg">
              <img
                src="https://static1.bdtickets.com/aaum/promotional/ca72013c-f58f-465b-9ffb-13f34622eaf5"
                alt="offer"
                className="w-full h-[300px] object-contain rounded-lg hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="p-4">
                <h1 className=" text-lg">Saintmartin Paribahan Teknaf Offer</h1>
                <div className="flex justify-between items-center my-3">
                  <button className="bg-[#004f6e] text-white px-5 py-2 rounded-lg">
                    Book Now
                  </button>
                  <span className="text-center">
                    <h6 className="line-through text-xs">BDT 2200</h6>
                    <h4 className="text-lg">BDT 1900</h4>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
