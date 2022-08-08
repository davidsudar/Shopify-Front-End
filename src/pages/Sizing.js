import SideBar from "../components/size guide/Sidebar";
import SizeGuide from "../components/size guide/SizeGuide";

const Sizing = () => (
  <div className="flex justify-between">
    <SideBar />
    {/* <p className="uppercase text-3xl">tshirt SIZE GUIDE</p> */}

    <SizeGuide guide="tshirt"/>
    <div></div>
  </div>
);

export default Sizing;
