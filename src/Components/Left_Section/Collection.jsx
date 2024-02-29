import { BiSearch, BiSolidSearch } from "react-icons/bi";
import { BiCollection, BiSolidCollection } from "react-icons/bi";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
import List from "./List";
import Album from "./Album";


function Collection() {
  return (
    <div className="grid gap-5 bg-zinc-900 w-full pt-3 rounded-md ">
                {/* for you section */}
                <div className="flex justify-between mt-2 px-3">
                    <div className="flex align-middle items-center gap-3"><BiCollection className=" scale-125" />Collection</div>
                    <div className="flex align-middle items-center gap-2">
                        <div><BiPlus className=" scale-125" /></div>
                        <div><BiRightArrowAlt className=" scale-125" /></div>
                    </div>
                </div>
                {/* user list */}
                <div className="grid gap-y-3">
                    {/* list */}
                    <List/>
                    {/* user search */}
                    <div className="flex justify-between align-middle items-center px-3 static">
                        <div><BiSearch className=" scale-125" /></div>
                        <div className="flex align-middle items-center gap-3">
                            <div className="text-sm">Last played</div>
                            <BiListUl className=" scale-150" />
                        </div>
                    </div>
                    {/* album */}
                    <Album/>
                </div>
            </div>
  )
}

export default Collection