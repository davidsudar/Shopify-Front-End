import SideBar from "../components/Sidebar";
import SizeGuide from "../components/SizeGuide";

const Sizing = () => (
  <div className="flex justify-between">
    <SideBar />
    {/* <p className="uppercase text-3xl">tshirt SIZE GUIDE</p> */}

    <SizeGuide guide="tshirt"/>
    <div></div>
  </div>
);

export default Sizing;
