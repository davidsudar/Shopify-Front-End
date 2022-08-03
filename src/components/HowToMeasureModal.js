import { Dialog } from "@headlessui/react";
import ChestMeasure from "../Assets/Chest Measure.png";

const HowToMeasureModal = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed z-10 inset-0 overflow-y-auto "
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="relative bg-white rounded max-w-sm mx-auto p-5">
          <Dialog.Title>How To Measure Chest</Dialog.Title>
          <Dialog.Description>
            <img
              className="block h-full w-auto"
              src={ChestMeasure}
              alt="How To Measure Chest"
            />
          </Dialog.Description>
          <button
            className="border-black border-solid border rounded mt-8 py-1 px-2"
            onClick={() => setIsOpen(false)}
          >
            OK
          </button>
        </div>
      </div>
    </Dialog>
    // <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
    //   <div className="flex items-center justify-center min-h-screen">
    //     <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
    //     <div className="relative bg-white rounded max-w-sm mx-auto p-8">
    //       <Dialog.Title className="text-xl">How To Measure Chest</Dialog.Title>
    //       <Dialog.Description>
    //         <img
    //           className="block h-full w-auto"
    //           src={ChestMeasure}
    //           alt="How To Measure Chest"
    //         />
    //       </Dialog.Description>
    //       <button
    //         className="border-black border-solid border rounded mt-8 py-1 px-2"
    //         onClick={() => setIsOpen(false)}
    //       >
    //         OK
    //       </button>
    //     </div>
    //   </div>
    // </Dialog>
  );
};

export default HowToMeasureModal;
