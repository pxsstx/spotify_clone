import NavBottom from "./Components/Bottom_Section/NavBottom"
import LeftSection from "./Components/Left_Section/LeftSection"
import RightSction from "./Components/Right_Section/RightSction"
import './index.css'


function App() {
  return (
    <div className="grid">
      <div className="w-screen h-[100vh] mx-auto bg-black text-white gap-x-5 grid grid-cols-[25%_75%] fixed ">
        {/* left section */}
        <LeftSection />
        {/* right section */}
        <RightSction/>
        {/* bottom section */}
        <NavBottom/>
      </div >

    </div>

  )
}

export default App
