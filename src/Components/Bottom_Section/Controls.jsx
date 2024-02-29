import { BiShuffle, BiSync } from "react-icons/bi";
import { BiSpeaker } from "react-icons/bi";
import { BiVolumeLow, BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
import { BiExpandAlt } from "react-icons/bi";


function Controls() {
    return (
        <div className="flex items-center justify-center gap-x-4 mr-5 ">
            <div className="flex items-center justify-center rounded-full overflow-hidden gap-x-3">
                <input id="volume" type="range" step="0.5" min="0"
                    max="50" />
            </div>
            <BiVolumeFull className=" scale-125" />
            <BiShuffle className=" scale-125" />
            <BiSync className=" scale-125" />
        </div>
    )
}

export default Controls