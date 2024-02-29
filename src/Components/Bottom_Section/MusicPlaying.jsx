import { BiHeart } from 'react-icons/bi'

function MusicPlaying() {
    return (
        <div className="flex px-2 ml-5">
            <div className="rounded-md overflow-hidden">
                <img src="https://placehold.co/50x50" alt="" />
            </div>
            <div className="grid ml-2 justify-center items-center">
                <div>Music Name</div>
                <div className="text-xs">Artist Name</div>
            </div>
            <div className=" flex justify-center items-center ml-5">
                <BiHeart className=" scale-125" />
            </div>
        </div>
    )
}

export default MusicPlaying