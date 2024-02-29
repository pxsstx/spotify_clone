import Navbar from "./Navbar";
import Collection from "./Collection";

function LeftSection() {
    return (
        <div className="grid grid-rows-[25%_75%] gap-5 mt-5 ml-5 w-full h-[82vh] text-white">
            {/* nav seection */}
            <Navbar/>
            {/* Collection section */}
            <Collection/>
        </div>
    )
}

export default LeftSection;