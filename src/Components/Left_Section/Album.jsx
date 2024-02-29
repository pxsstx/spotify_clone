import CardArtist from "./CardArtist"
import CardPlaylist from "./CardPlaylist"

function Album() {
    return (
        <div className="grid gap-y-1 h-[47%] overflow-scroll">
            {/* playlist */}
            <CardPlaylist />
            {/* artist */}
            <CardArtist/>
        </div>
    )
}

export default Album