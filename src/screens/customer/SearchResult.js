import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BusPlan from "./BusPlan";

const SearchResult = () => {
  return (
    <div>
      <div className="grid grid-cols-2 px-10 py-6">
        <div className="border-r-2 p-3">
          <h3 className="">Departure</h3>
          <div className="flex items-center justify-between text-sm">
            <div className="flex flex-col justify-around">
              <div className="flex items-center space-x-2">
                <img
                  src={"/assets/bus-vector.png"}
                  className="h-16"
                  alt="logo"
                />
                <div>
                  <h3 className="text-blue-800 font-bold text-2xl">
                    Dhaka - Panchagarh
                  </h3>
                  <p className="text-gray-600">05 February, 2024</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-2 text-sm">
              <button className="bg-white text-blue-800 font-bold py-2 px-4 rounded my-5">
                <div className="flex items-center">
                  <IoIosArrowBack /> <span>Previous Day</span>
                </div>
              </button>
              <button className="bg-white text-blue-800 font-bold py-2 px-4 rounded my-5">
                <div className="flex items-center">
                  <span>Next Day</span> <IoIosArrowForward />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="p-3">
          <h3 className="">Return</h3>
          <div className="flex items-center justify-between text-sm">
            <button className="bg-white text-blue-800 font-bold py-2 px-4 rounded my-5">
              Add Return Ticket
            </button>

            <button className="text-white bg-blue-800 font-bold py-2 px-4 rounded my-5">
              Modify Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 px-10 py-6 space-x-5">
        <div className="bg-white px-8 py-5 mt-5 rounded-md text-sm space-y-3">
          <h3 className="text-blue-900 font-semibold mb-6">Refine Search</h3>
          <h3 className="text-blue-900 font-semibold">Operator</h3>
          <div className="flex items-center space-x-2 ml-5">
            <input type="checkbox" />
            <h3 className="text-gray-600">Hanif Enterprise</h3>
          </div>
          <hr />

          <h3 className="text-blue-900 font-semibold">Bus Type</h3>
          <div className="flex items-center space-x-2 ml-5">
            <input type="checkbox" />
            <h3 className="text-gray-600">AC</h3>
          </div>
          <div className="flex items-center space-x-2 ml-5">
            <input type="checkbox" />
            <h3 className="text-gray-600">Non AC</h3>
          </div>
          <hr />

          <h3 className="text-blue-900 font-semibold">Boarding Point</h3>
          <div className="flex items-center space-x-2 ml-5">
            <input type="checkbox" />
            <h3 className="text-gray-600">Gabtoli</h3>
          </div>
          <hr />

          <h3 className="text-blue-900 font-semibold">Dropping Point</h3>
          <div className="flex items-center space-x-2 ml-5">
            <input type="checkbox" />
            <h3 className="text-gray-600">Panchagarh</h3>
          </div>
          <hr />

          <h3 className="text-blue-900 font-semibold">Departure Time</h3>
          <div className="flex items-center space-x-2 ml-5">
            <input type="checkbox" />
            <h3 className="text-gray-600">Morning</h3>
          </div>
          <div className="flex items-center space-x-2 ml-5">
            <input type="checkbox" />
            <h3 className="text-gray-600">Afternoon</h3>
          </div>
          <div className="flex items-center space-x-2 ml-5">
            <input type="checkbox" />
            <h3 className="text-gray-600">Evening</h3>
          </div>
          <hr />

          <h3 className="text-blue-900 font-semibold">Arrival Time</h3>
          <div className="flex items-center space-x-2 ml-5">
            <input type="checkbox" />
            <h3 className="text-gray-600">Morning</h3>
          </div>
          <div className="flex items-center space-x-2 ml-5">
            <input type="checkbox" />
            <h3 className="text-gray-600">Afternoon</h3>
          </div>
          <div className="flex items-center space-x-2 ml-5">
            <input type="checkbox" />
            <h3 className="text-gray-600">Evening</h3>
          </div>
        </div>
        <div className="col-span-3">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="">
                  <table
                    class="min-w-full  text-sm font-light"
                    style={{
                      height: "1px",
                    }}
                  >
                    <thead class="border-b  dark:border-neutral-500">
                      <tr>
                        <th scope="col" class="px-5 py-3 font-medium">
                          Operator (Bus Type)
                        </th>
                        <th scope="col" class="px-5 py-3 font-medium">
                          Dep. Time
                        </th>
                        <th scope="col" class="px-5 py-3 font-medium">
                          Arr. Time
                        </th>
                        <th scope="col" class="px-5 py-3 font-medium">
                          Seats Available
                        </th>
                        <th scope="col" class="px-5 py-3 font-medium">
                          Fare
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="  bg-white h-full">
                        <td className="whitespace-nowrap px-5 py-2 space-y-1">
                          <h3 className="font-semibold text-base text-blue-900">
                            Hanif Enterprise
                          </h3>
                          <h3 className="text-gray-500 text-xs">
                            1, Hino 1J Pluss, Non AC
                          </h3>
                          <h3 className="text-gray-500 text-xs">
                            <span className="font-semibold text-gray-600">
                              Route:
                            </span>{" "}
                            Dhaka -Rangpur- Saidpur-Thakurgaon
                            -Panchagarh-Banglabandha
                          </h3>
                          <h3 className="text-gray-500 text-xs">
                            <span className="font-semibold text-gray-600">
                              Starting Point:
                            </span>{" "}
                            Dhaka
                          </h3>
                          <h3 className="text-gray-500 text-xs">
                            <span className="font-semibold text-gray-600">
                              Ending Point:
                            </span>{" "}
                            Panchagarh
                          </h3>
                        </td>
                        <td className="whitespace-nowrap px-5 py-3 text-center align-top">
                          05:30 PM
                        </td>
                        <td className="whitespace-nowrap px-5 py-3 text-center align-top">
                          06:00 AM
                        </td>
                        <td className="whitespace-nowrap px-5 py-3 text-center align-top text-blue-900">
                          25
                        </td>
                        <td
                          className="whitespace-nowrap px-5 py-3"
                          style={{
                            height: "100%",
                          }}
                        >
                          <div className="flex flex-col justify-between items-center h-full text-blue-900 font-semibold text-base">
                            <h3>৳ 1000</h3>
                            <button className="text-white bg-blue-800 font-bold py-2 px-4 rounded">
                              View Seats
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr class=" bg-white border-b-8 border-[#ececec]">
                        <td
                          class=" px-5 py-3 font-medium space-x-3 text-xs text-blue-900"
                          colSpan={"5"}
                        >
                          <button>Cancellation Policy</button>
                          <button>Boarding point</button>
                          <button>Dropping point</button>
                          <button>Facilities</button>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td colSpan={"5"}>
                          <BusPlan />
                        </td>
                      </tr>
                      <tr className=" hover:bg-gray-100 bg-white h-full">
                        <td className="whitespace-nowrap px-5 py-2 space-y-1">
                          <h3 className="font-semibold text-base text-blue-900">
                            Hanif Enterprise
                          </h3>
                          <h3 className="text-gray-500 text-xs">
                            1, Hino 1J Pluss, Non AC
                          </h3>
                          <h3 className="text-gray-500 text-xs">
                            <span className="font-semibold text-gray-600">
                              Route:
                            </span>{" "}
                            Dhaka -Rangpur- Saidpur-Thakurgaon
                            -Panchagarh-Banglabandha
                          </h3>
                          <h3 className="text-gray-500 text-xs">
                            <span className="font-semibold text-gray-600">
                              Starting Point:
                            </span>{" "}
                            Dhaka
                          </h3>
                          <h3 className="text-gray-500 text-xs">
                            <span className="font-semibold text-gray-600">
                              Ending Point:
                            </span>{" "}
                            Panchagarh
                          </h3>
                        </td>
                        <td className="whitespace-nowrap px-5 py-3 text-center align-top">
                          05:30 PM
                        </td>
                        <td className="whitespace-nowrap px-5 py-3 text-center align-top">
                          06:00 AM
                        </td>
                        <td className="whitespace-nowrap px-5 py-3 text-center align-top text-blue-900">
                          25
                        </td>
                        <td
                          className="whitespace-nowrap px-5 py-3"
                          style={{
                            height: "100%",
                          }}
                        >
                          <div className="flex flex-col justify-between items-center h-full text-blue-900 font-semibold text-base">
                            <h3>৳ 1000</h3>
                            <button className="text-white bg-blue-800 font-bold py-2 px-4 rounded">
                              View Seats
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr class=" bg-white border-b-8 border-[#ececec]">
                        <td
                          class=" px-5 py-3 font-medium space-x-3 text-xs text-blue-900"
                          colSpan={"5"}
                        >
                          <button>Cancellation Policy</button>
                          <button>Boarding point</button>
                          <button>Dropping point</button>
                          <button>Facilities</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
