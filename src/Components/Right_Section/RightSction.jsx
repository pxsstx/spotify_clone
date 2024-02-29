import MenuNavbar from './MenuNavbar'
import ListMain from './ListMain'
import AllMain from './AllMain'

function RightSection() {
    return (
        <div className="grid grid-rows-[10%_10%_80%] rounded-md bg-gradient-to-br from-zinc-900 via-bg-round to-zinc-900 pt-5 px-5 right-5 w-[95%] ml-3 mt-5 h-[84.5vh]">
            {/* menu navber*/}
            <MenuNavbar/>         
            {/* list_main */}
            <ListMain/>
            {/* all */}
            <AllMain/>
        </div>
    )
}

export default RightSection