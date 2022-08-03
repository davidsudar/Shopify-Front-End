import SizeGuide from "../components/SizeGuide";

const Sizing = () => (
  <div>
    <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl sm:px-8 max-w-3xl lg:pt-8 sm:pt-4 md:pt-4" >
      tshirt SIZE GUIDE
    </h1>

    <SizeGuide guide="tshirt" />

    <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl sm:px-8 max-w-3xl lg:pt-8">
      leggings
    </h1>

    <SizeGuide guide="tshirt" />
  </div>
);

export default Sizing;
