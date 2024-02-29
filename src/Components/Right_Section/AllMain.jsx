import CardArtistMain from "./CardArtistMain"
import CardPlaylistMain from "./CardPlaylistMain"


function AllMain() {
  return (
    <div>
          <div className=" h-[98%] overflow-y-scroll flex flex-col gap-y-5 py-5">
            <CardPlaylistMain/>
            <div>
              <div className=" flex justify-between items-center mt-5">
                <div className="text-xl font-semibold">Top Today</div>
                <div className="text-sm text-zinc-500">See more</div>
              </div>
              <div className="grid grid-cols-4 gap-x-3 mt-2 w-[100%] gap-y-3">
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                  <div className=" rounded-md overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                    <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                  </div>
                  <div className="my-3">Pasailyo</div>
                  <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                  <div className=" rounded-md overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                    <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                  </div>
                  <div className="my-3">Blue Butterflies</div>
                  <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                  <div className=" rounded-md overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                    <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                  </div>
                  <div className="my-3">Art House</div>
                  <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                  <div className=" rounded-md overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                    <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                  </div>
                  <div className="my-3">love.</div>
                  <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>

            <CardArtistMain/>

            <div>
              <div className=" flex justify-between items-center mt-5">
                <div className="text-xl font-semibold">Popular Album</div>
                <div className="text-sm text-zinc-500">See more</div>
              </div>
              <div className="grid grid-cols-4 gap-x-3 mt-2 w-[100%] gap-y-3">
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                  <div className=" rounded-md overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                    <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                  </div>
                  <div className="my-3">Dept</div>
                  <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                  <div className=" rounded-md overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                    <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                  </div>
                  <div className="my-3">Gavin D.</div>
                  <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                  <div className=" rounded-md overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                    <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                  </div>
                  <div className="my-3">Whal & Dolph</div>
                  <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="mx-auto items-center justify-center w-full h-full overflow-hidden bg-bg-round rounded-md px-3 pt-3 hover:bg-zinc-800">
                  <div className=" rounded-md overflow-hidden border-2 flex justify-center items-center lg:w-[170px] lg:h-[170px]">
                    <img className="scale-125" src="https://placehold.co/150x150" alt="" />
                  </div>
                  <div className="my-3">Tattoo Colour</div>
                  <p className="text-xs pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default AllMain