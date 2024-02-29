function CardPlaylist() {
    return (
        <div>
            <div className="flex align-middle items-center gap-4 hover:bg-zinc-700 rounded-md py-2 px-2 mx-1 w-[95%] ">
                <img className="rounded-md" src="https://placehold.co/50x50" />
                <div >
                    <p>Favorite</p>
                    <div className="flex gap-3 text-xs">
                        <p>Playlist</p> • <p>1 Music</p>
                    </div>
                </div>
            </div>
            <div className="flex align-middle items-center gap-4 hover:bg-zinc-700 rounded-md py-2 px-2 mx-1 w-[95%] ">
                <img className="rounded-md" src="https://placehold.co/50x50" />
                <div >
                    <p>T-POP NOW</p>
                    <div className="flex gap-3 text-xs">
                        <p>Playlist</p> • <p>Spotify</p>
                    </div>
                </div>
            </div>
            <div className="flex align-middle items-center gap-4 hover:bg-zinc-700 rounded-md py-2 px-2 mx-1 w-[95%] ">
                <img className="rounded-md" src="https://placehold.co/50x50" />
                <div>
                    <p>Car list</p>
                    <div className="flex gap-3 text-xs">
                        <p>Playlist</p> • <p>Pxsst</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPlaylist