function CardPlaylistMain() {
    return (
        <div>
            <div className="text-xl font-semibold">For You</div>
            <div className="grid grid-cols-4 gap-x-3 mt-2 w-[100%] gap-y-3">
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                    <div className=" rounded-md overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                        <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                    </div>
                    <div className="my-3">Daily Mix 1</div>
                    <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                    <div className=" rounded-md overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                        <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                    </div>
                    <div className="my-3">Daily Mix 2</div>
                    <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                    <div className=" rounded-md overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                        <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                    </div>
                    <div className="my-3">Daily Mix 3</div>
                    <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>
    )
}

export default CardPlaylistMain