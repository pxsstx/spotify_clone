import { BiBell, BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi'

function MenuNavbar() {
    return (
        <div className="flex w-full h-[40px] justify-between text-sm">
            <div className="flex gap-3 w-[40%]">
                <div className="flex bg-zinc-800 rounded-full h-[35px] w-[35px] items-center justify-center"><BiSolidChevronLeft className=" scale-150" /></div>
                <div className="flex bg-zinc-800 rounded-full h-[35px] w-[35px] items-center justify-center"><BiSolidChevronRight className=" scale-150" /></div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="px-3 py-2 bg-white text-black rounded-full h-[35px]">
                    Get Premium
                </div>
                <div className="flex bg-zinc-800 justify-center items-center rounded-full h-[35px] w-[35px]">
                    <BiBell className=" scale-150" />
                </div>
                <div className="flex bg-zinc-800 items-center justify-center rounded-full overflow-hidden h-[35px] w-[35px]">
                    <img src="https://placehold.co/32x32" className=" scale-125" />
                </div>
            </div>
        </div>
    )
}

export default MenuNavbar