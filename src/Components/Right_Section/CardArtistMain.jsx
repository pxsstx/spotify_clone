function CardArtistMain() {
    return (
        <div>
            <div className=" flex justify-between items-center mt-5">
                <div className="text-xl font-semibold">Popular Artists</div>
                <div className="text-sm text-zinc-500">See more</div>
            </div>
            <div className="grid grid-cols-4 gap-x-3 mt-2 w-[100%] gap-y-3">
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                    <div className=" rounded-full overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                        <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                    </div>
                    <div className="my-3">Fellow Fellow</div>
                    <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                    <div className=" rounded-full overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                        <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                    </div>
                    <div className="my-3">HYBS</div>
                    <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                    <div className=" rounded-full overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                        <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                    </div>
                    <div className="my-3">Sunkissed Loka</div>
                    <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                    <div className=" rounded-full overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                        <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                    </div>
                    <div className="my-3">The weekend</div>
                    <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>
    )
}

export default CardArtistMain