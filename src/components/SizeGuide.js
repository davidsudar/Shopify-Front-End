import React, { useState } from "react";
import HowToMeasureModal from "./HowToMeasureModal";

const tshirt = [
  { Size: "XS", ChestIn: "82", ChestCm: "64", AusSize: "6-8" },
  { Size: "S", ChestIn: "84", ChestCm: "66", AusSize: "8-10" },
  { Size: "M", ChestIn: "86", ChestCm: "68", AusSize: "10-12" },
  { Size: "L", ChestIn: "88", ChestCm: "70", AusSize: "12-14" },
  { Size: "XL", ChestIn: "90", ChestCm: "72", AusSize: "14-16" },
];

// const leggings = [
//     { Size: "XS", ChestIn: "82", ChestCm: "64", AusSize: "6-8" },
//     { Size: "S", ChestIn: "84", ChestCm: "66", AusSize: "8-10" },
//     { Size: "M", ChestIn: "86", ChestCm: "68", AusSize: "10-12" },
//     { Size: "L", ChestIn: "88", ChestCm: "70", AusSize: "12-14" },
//     { Size: "XL", ChestIn: "90", ChestCm: "72", AusSize: "14-16" },
//   ];

export default function SizeGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div className="p-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 pt-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className=" bg-stone-200">
                  <th
                    scope="col"
                    className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  ></th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  ></th>
                  <th
                    scope="col"
                    colSpan="2"
                    className="text-center px-5 py-3  border border-gray-200 text-gray-800 text-sm uppercase font-normal"
                  >
                    Chest
                  </th>
                </tr>
                <tr className=" bg-stone-200">
                  <th
                    scope="col"
                    className="px-5 py-3   border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"
                  >
                    Size
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"
                  >
                    AUS
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3   border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"
                  >
                    Inches
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3   border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"
                  >
                    CM
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-stone-100">
                {tshirt.map((item) => (
                  <tr className="text-center" key={item.Size + "-tshirt"}>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm bold">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.Size}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.AusSize}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.ChestIn}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.ChestCm}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="underline text-xs" onClick={() => setIsOpen(true)}>
            How To Measure
          </button>
        </div>
      </div>
      <HowToMeasureModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

// export default SizeGuide;
