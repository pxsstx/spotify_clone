import { BiPause, BiSkipNext, BiSkipPrevious } from 'react-icons/bi'

function ControlsMusic() {
  return (
    <div className="flex gap-x-3 scale-150 mr-4">
            <BiSkipPrevious className=" w-[25px] h-[25px] flex items-center justify-center" />
            <BiPause className=" bg-zinc-700 w-[25px] h-[25px] rounded-full flex items-center justify-center" />
            <BiSkipNext className=" w-[25px] h-[25px] flex items-center justify-center" />
          </div>
  )
}

export default ControlsMusic