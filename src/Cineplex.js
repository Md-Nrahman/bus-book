import React, { useCallback, useEffect, useState } from "react";

const Cineplex = () => {
  const [layoutDesign, setLayoutDesign] = useState({
    rows: 30,
    columns: 30,
  });

  const [proposedLayout, setProposedLayout] = useState([]);

  const [bookedSeats, setBookedSeats] = useState([]);

  const bookSeat = useCallback((row, column) => {
    //if seat is already booked deselect otherwise select
    const bookedSeatsCopy = [...bookedSeats];
    const index = bookedSeatsCopy.findIndex(
      (item) => item.id === `${row + 1}-${column + 1}`
    );
    if (index > -1) {
      bookedSeatsCopy.splice(index, 1);
    } else {
      bookedSeatsCopy.push({
        id: `${row + 1}-${column + 1}`,
        name: `${row + 1}-${column + 1}`,
      });
    }
    setBookedSeats(bookedSeatsCopy);
  });

  const changeProposedLayout = useCallback(() => {
    const proposedLayout = [];
    for (let i = 0; i < layoutDesign.rows; i++) {
      for (let j = 0; j < layoutDesign.columns; j++) {
        proposedLayout.push({
          id: `${i + 1}-${j + 1}`,
          name: `${i + 1}-${j + 1}`,
          doesExist: true,
        });
      }
    }
    setProposedLayout(proposedLayout);
  }, [layoutDesign]);

  const changeSeatingLayout = useCallback(
    (row, column) => {
      const proposedLayoutCopy = [...proposedLayout];
      const index = proposedLayoutCopy.findIndex(
        (item) => item.id === `${row + 1}-${column + 1}`
      );
      if (index > -1) {
        proposedLayoutCopy[index].doesExist =
          !proposedLayoutCopy[index].doesExist;
      }
      setProposedLayout(proposedLayoutCopy);
    },
    [proposedLayout]
  );

  useEffect(() => {
    changeProposedLayout();
  }, [layoutDesign]);

  console.log(bookedSeats, proposedLayout);

  return (
    <div className="App">
      <header className="">
        <img src={"/assets/screen.png"} className="h-full mx-auto" alt="logo" />
        <ul
          className="gap-y-3 gap-x-2 grid overflow-x-auto mx-auto"
          style={{
            gridTemplateColumns: `repeat(${layoutDesign.columns}, 1fr)`,
            width: `${layoutDesign.columns * 40}px`,
          }}
        >
          {Array.from({ length: layoutDesign.rows }, (_, i) => (
            <>
              {Array.from({ length: layoutDesign.columns }, (_, index) =>
                proposedLayout.find(
                  (item) => item.id === `${i + 1}-${index + 1}`
                )?.doesExist ? (
                  <li
                    className="w-6"
                    onClick={() =>
                      proposedLayout.find(
                        (item) => item.id === `${i + 1}-${index + 1}`
                      )?.isBooked
                        ? null
                        : bookSeat(i, index)
                    }
                  >
                    <img
                      src={"/assets/bus-seat.png"}
                      className="w-6"
                      alt="logo"
                      style={{
                        //change image color to green if seat is booked otherwise red
                        filter:
                          bookedSeats.find(
                            (item) => item.id === `${i + 1}-${index + 1}`
                          ) &&
                          "invert(23%) sepia(95%) saturate(6502%) hue-rotate(108deg) brightness(102%) contrast(105%)",
                        opacity: proposedLayout.find(
                          (item) => item.id === `${i + 1}-${index + 1}`
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

        <form class="w-full max-w-lg mx-auto">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Columns
              </label>
              <input
                class="appearance-none block w-full bg-gray-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                placeholder="5"
                onChange={(e) =>
                  setLayoutDesign({ ...layoutDesign, columns: e.target.value })
                }
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Rows
              </label>
              <input
                class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="10"
                onChange={(e) =>
                  setLayoutDesign({ ...layoutDesign, rows: e.target.value })
                }
              />
            </div>
          </div>
        </form>
        <ul
          className="gap-y-3 gap-x-2 grid overflow-x-auto mx-auto"
          style={{
            gridTemplateColumns: `repeat(${layoutDesign.columns}, 1fr)`,
            width: `${layoutDesign.columns * 40}px`,
          }}
        >
          {Array.from({ length: layoutDesign.rows }, (_, i) => (
            <>
              {Array.from({ length: layoutDesign.columns }, (_, index) => (
                <li
                  className="w-6"
                  onClick={() => changeSeatingLayout(i, index)}
                >
                  <img
                    src={"/assets/bus-seat.png"}
                    className="w-6"
                    alt="logo"
                    style={{
                      opacity: proposedLayout.find(
                        (item) => item.id === `${i + 1}-${index + 1}`
                      )?.doesExist
                        ? 1
                        : 0.1,
                    }}
                  />
                </li>
              ))}
            </>
          ))}
        </ul>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Cineplex;
