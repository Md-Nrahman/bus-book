import React, { useCallback, useEffect, useState } from "react";

const BusPlan = () => {
  const [layoutDesign, setLayoutDesign] = useState({
    rows: 10,
    columns: 5,
  });

  const [proposedLayout, setProposedLayout] = useState([]);
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const saveConfiguration = () => {
    const configuration = {
      rows: layoutDesign.rows,
      columns: layoutDesign.columns,
      layout: proposedLayout,
    };
    localStorage.setItem("busLayout", JSON.stringify(configuration));
  };

  const changeProposedLayout = useCallback(() => {
    const proposedLayout = [];
    for (let i = 0; i < layoutDesign.rows; i++) {
      for (let j = 0; j < layoutDesign.columns; j++) {
        proposedLayout.push({
          id: `${layoutDesign.columns * i + (j + 1)}`,
          name: `${alphabets[i]}-${j + 1}`,
          doesExist: true,
        });
      }
    }
    setProposedLayout(proposedLayout);
  }, [layoutDesign]);

  const changeSeatingLayout = useCallback(
    (row, column) => {
      // const proposedLayoutCopy = [...proposedLayout];
      // const index = proposedLayoutCopy.findIndex(
      //   (item) => item.id === `${row + 1}-${column + 1}`
      // );
      // if (index > -1) {
      //   proposedLayoutCopy[index].doesExist =
      //     !proposedLayoutCopy[index].doesExist;
      // }
      // setProposedLayout(proposedLayoutCopy);
      for (let i = 0; i < layoutDesign.rows; i++) {
        let tempValue = 0;
        for (let j = 0; j < layoutDesign.columns; j++) {
          const proposedLayoutCopy = [...proposedLayout];
          if (i === row && j === column) {
            const index = proposedLayoutCopy.findIndex(
              (item) =>
                item.id === `${layoutDesign.columns * row + (column + 1)}`
            );
            if (index > -1 && proposedLayoutCopy[index].doesExist === false) {
              proposedLayoutCopy[index].doesExist =
                !proposedLayoutCopy[index].doesExist;
              proposedLayoutCopy[index].name = `${alphabets[row]}-${
                tempValue + 1
              }`;
              tempValue++;
            } else if (index > -1 && proposedLayoutCopy[index].doesExist) {
              proposedLayoutCopy[index].doesExist =
                !proposedLayoutCopy[index].doesExist;
              proposedLayoutCopy[index].name = null;
            }
          } else {
            const index = proposedLayoutCopy.findIndex(
              (item) => item.id === `${layoutDesign.columns * i + (j + 1)}`
            );
            if (index > -1 && proposedLayoutCopy[index].doesExist === false) {
              proposedLayoutCopy[index].name = null;
            } else if (
              index > -1 &&
              proposedLayoutCopy[index].doesExist === true
            ) {
              proposedLayoutCopy[index].name = `${alphabets[i]}-${
                tempValue + 1
              }`;
              tempValue++;
            }
          }
          setProposedLayout(proposedLayoutCopy);
        }
      }
    },

    [proposedLayout]
  );

  useEffect(() => {
    changeProposedLayout();
  }, [layoutDesign]);

  console.log(proposedLayout);

  return (
    <div className="App p-20">
      <header className="">
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
        <h3 className="my-3 font-light text-xs">
          Select Seats that does not exist in the bus. Click on the seats to
          see. Click again to deselect.
        </h3>
        <ul
          className="gap-y-3 gap-x-2 grid overflow-x-auto mx-auto"
          style={{
            gridTemplateColumns: `repeat(${layoutDesign.columns}, 1fr)`,
            width: `${layoutDesign.columns * 40}px`,
          }}
        >
          {Array.from({ length: layoutDesign.columns - 1 }, (_, i) => (
            <li className="w-6"></li>
          ))}

          <li>
            <img src={"/assets/steering.png"} className="h-6" alt="logo" />
          </li>
          {Array.from({ length: layoutDesign.columns - 1 }, (_, i) => (
            <li className="w-6"></li>
          ))}
          <li>
            <img src={"/assets/bus-seat.png"} className="h-6" alt="logo" />
          </li>
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
                        (item) =>
                          item.id ===
                          `${layoutDesign.columns * i + (index + 1)}`
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
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 w-full"
          onClick={saveConfiguration}
        >
          Save
        </button>
      </header>
    </div>
  );
};

export default BusPlan;
