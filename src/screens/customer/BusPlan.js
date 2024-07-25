import React, { useCallback, useEffect, useState } from "react";

const BusPlan = () => {
  const [bookedSeats, setBookedSeats] = useState([]);

  const {
    rows = 0,
    columns = 0,
    layout = [],
  } = JSON?.parse(localStorage.getItem("busLayout")) || {};

  const bookSeat = useCallback((row, column) => {
    //if seat is already booked deselect otherwise select
    const bookedSeatsCopy = [...bookedSeats];
    const index = bookedSeatsCopy.findIndex(
      (item) => item.id === `${columns * row + (column + 1)}`
    );
    if (index > -1) {
      bookedSeatsCopy.splice(index, 1);
    } else {
      bookedSeatsCopy.push({
        id: `${columns * row + (column + 1)}`,
        name: layout.find(
          (item) => item.id === `${columns * row + (column + 1)}`
        ).name,
      });
    }
    setBookedSeats(bookedSeatsCopy);
  });

  console.log(bookedSeats);

  return (
    <div className="px-12 py-4 border-b-8">
      <div className="grid grid-cols-3 gap-x-4 rounded-lg py-10">
        <ul
          className="gap-y-3 gap-x-2 grid overflow-x-auto mx-auto"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            width: `${columns * 40}px`,
          }}
        >
          {Array.from({ length: columns - 1 }, (_, i) => (
            <li className="w-6"></li>
          ))}

          <li>
            <img src={"/assets/steering.png"} className="h-6" alt="logo" />
          </li>
          {Array.from({ length: columns - 1 }, (_, i) => (
            <li className="w-6"></li>
          ))}
          <li>
            <img
              src={"/assets/bus-seat-filled.png"}
              className="h-6"
              alt="logo"
              style={{
                filter:
                  "invert(51%) sepia(3%) saturate(21%) hue-rotate(324deg) brightness(98%) contrast(94%)",
              }}
            />
          </li>
          {Array.from({ length: rows }, (_, i) => (
            <>
              {Array.from({ length: columns }, (_, index) =>
                layout.find(
                  (item) => item.id === `${columns * i + (index + 1)}`
                )?.doesExist ? (
                  <li
                    className="w-6"
                    onClick={() =>
                      layout.find(
                        (item) => item.id === `${columns * i + (index + 1)}`
                      )?.isBooked
                        ? null
                        : bookSeat(i, index)
                    }
                  >
                    <img
                      src={
                        bookedSeats.find(
                          (item) => item.id === `${columns * i + (index + 1)}`
                        )
                          ? "/assets/bus-seat-filled.png"
                          : "/assets/bus-seat.png"
                      }
                      className="w-6"
                      alt="logo"
                      style={{
                        //change image color to green if seat is booked otherwise red
                        filter:
                          bookedSeats.find(
                            (item) => item.id === `${columns * i + (index + 1)}`
                          ) &&
                          "invert(23%) sepia(95%) saturate(6502%) hue-rotate(108deg) brightness(102%) contrast(105%)",
                        opacity: layout.find(
                          (item) => item.id === `${columns * i + (index + 1)}`
                        )?.isBooked
                          ? 0.1
                          : 1,
                      }}
                    />
                  </li>
                ) : (
                  <li className="w-6"></li>
                )
              )}
            </>
          ))}
        </ul>
        <div className="m-2">
          <h3>Selected Seats: (Max 5)</h3>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block overflow-y-auto max-h-[350px] min-w-full py-2 sm:px-6 lg:px-8">
                <div class="">
                  <table class="min-w-full  text-sm font-light">
                    <thead class="border-b  dark:border-neutral-500">
                      <tr>
                        <th scope="col" class="px-5 py-3 font-medium">
                          Seat
                        </th>
                        <th scope="col" class="px-5 py-3 font-medium">
                          Type
                        </th>
                        <th scope="col" class="px-5 py-3 font-medium">
                          Fare
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {bookedSeats.map((item) => (
                        <tr className=" hover:bg-gray-100 border-b even:bg-gray-50 odd:bg-white">
                          <td className="whitespace-nowrap px-5 py-3">
                            {item.name}
                          </td>
                          <td className="whitespace-nowrap px-5 py-3">
                            Regular
                          </td>
                          <td className="whitespace-nowrap px-5 py-3">500</td>
                        </tr>
                      ))}
                      <tr class="border-b dark:border-neutral-500 even:bg-gray-50 odd:bg-white">
                        <td class="whitespace-nowrap px-5 py-3 font-medium">
                          Total
                        </td>
                        <td></td>
                        <td class="whitespace-nowrap px-5 py-3 font-medium">
                          500
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-2 p-5">
          <form class="w-full max-w-lg mx-auto">
            <div class="space-y-5 mb-6">
              <div class="w-full px-3 mb-6 md:mb-0">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Boarding Point
                </label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose Boarding Point</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div class="w-full px-3">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Drop Point
                </label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose Destination</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusPlan;
