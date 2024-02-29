import { BiHomeAlt2, BiSolidHomeAlt2 } from "react-icons/bi";
import { BiSearch, BiSolidSearch } from "react-icons/bi";

function Navbar() {
    return (
        <div className="grid bg-zinc-900 px-3 py-5 rounded-md gap-y-3">
            <div>logo</div>
            <div className="flex align-middle items-center gap-2"><BiHomeAlt2 className=" scale-125" />Home</div>
            <div className="flex align-middle items-center gap-2"><BiSearch className=" scale-125" />Search</div>
        </div>
    )
}

export default Navbar;