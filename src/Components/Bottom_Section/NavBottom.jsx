import MusicPlaying from "./MusicPlaying";
import Controls from "./Controls";
import Tarck from "./Tarck";
import ControlsMusic from './ControlsMusic';

function NavBottom() {
  return (
    <div className="ml-5 mt-4 w-[95.5%] h-[80px] bg-zinc-900 rounded-t-md col-span-full ">
      <div className="mt-4 mx-3">
        <div className="flex flex-col-[15%_15%_50%_20%] items-center justify-between mx-auto w-full">
          {/* music playing */}
          <MusicPlaying/>
          {/* controls music */}
          <ControlsMusic/>
          {/* tarck */}
          <Tarck/>
          {/* controls */}
          <Controls/>
        </div>
      </div>
    </div>
  )
}

export default NavBottom