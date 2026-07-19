import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className = "bg-[#F8ECDC] w-full flex flex-col top-0 overflow-x-hidden">
  <div className = "items-center justify-center mt-15 w-full">
    <img src = "/banner.png"/>


    <div className = "flex flex-col justify-start w-140 ml-15 text-[#304076] -mt-10">
      <p className = "font-kapakana text-[14rem] -mb-25"> About!!!</p>
      <p className = "font-newsreader text-3xl">Woahhh you wanna know more about me??</p>
    </div>

    <div className = "flex flex-row justify-between ml-10 mr-10 pt-10 text-[#304076]"> 
      <p className = "font-newsreader text-3xl mt-10">
        ooooh I have a life?
      </p>
      <img src = "/lineee1.png" className = "w-90 h-0.5 mt-14 -ml-90"/>
      <p className = "font-kapakana text-9xl">
        Stuff I Do
      </p>
    </div>

    <div className="grid grid-cols-3 gap-6 p-8">
      <div className="bg-[#304076] rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105"></div>
      <div className="bg-[#304076] rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105"></div>
      <div className="bg-[#304076] rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105"></div>
      <div className="bg-[#304076] rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105"></div>
      <div className="bg-[#304076] rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105"></div>
      <div className="bg-[#304076] rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105"></div>
    </div>
  </div>

  <div className = "flex flex-row justify-between text-[#304076] mt-20 items-center">
    <div className = "flex flex-col items-start justify-start ml-20 w-170">
      <p className = "font-kapakana text-[12rem]">Fun Facts</p>
      <p className = "font-newsreader text-3xl -mt-20">
        Fun facts about me!
      </p>
      <ul className="font-newsreader text-2xl list-disc pl-5 space-y-3 mt-5">
        <li>My favorite foods are hotpot and peach flavored sparkling water</li>
        <li>I inherently fall asleep very very quickly (I also nap in random places)</li>
        <li>SHARKSS I LOVE SHARKSS</li>
        <li>I completed 60 hours of work in a week for fallout (with school and an english exam)</li>
        <li>I love meeting new people and yapping! If you see me around, please come talk to me!!</li>
        <li>I love listening to music! If you have any music recs please send them to me :)</li>
      </ul>

    </div>
    
    <img src = "/polaroidlove.png" className = "w-100 h-120 mr-40 mt-20"/>



  </div>


  <div className = "text-[#304076] text-right mr-10">
    <p className = "font-kapakana text-[12rem]"> Interests</p>
    <p className = "font-newsreader text-2xl -mt-20">Various fandoms i'm in!</p>
    </div> 

    <div className = "flex flex-col mt-10">
      <div className = "flex flex-row gap-2 w-max h-45 animate-scroll-left">
       <div className = "relative group h-45 overflow-hidden">
        <img src = "/orv.png" className = "h-45 "/>
        <div className = "text-center flex flex-col absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200">
          <p className = "text-6xl text-[#f8ECDC] font-jersey"></p>
        </div>
        </div>

        <div className = "relative group h-45 overflow-hidden">
        <img src = "/svt.png" className = "h-45"/>
        <div className = ""></div>
        </div> 
        <img src = "/tbhk.png" className = "h-45"/>
        <img src = "/alnst.png" className = "h-45"/>
        <img src = "/orv.png" className = "h-45"/>
        <img src = "/svt.png" className = "h-45"/>
        <img src = "/tbhk.png" className = "h-45"/>
        <img src = "/alnst.png" className = "h-45"/>
      </div>

      <div className = "flex flex-row gap-2 mt-2 animate-scroll-right w-max">
      <div className = "relative group h-45 overflow-hidden">
        <img src = "/aldi.png" className = "h-45"/>
        <div className = "text-center flex flex-col absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
          <p className = " text-[#F8ECDC] font-jersey text-6xl "> Alpha Drive One</p>
        </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/prsk.png" className = "h-45"/>
        <div className = "flex flex-col text-center absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
        <p className = "text-[#F8ECDC] font-jersey text-6xl ">Project Sekai</p>
        </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/zb1.png" className = "h-45"/>
        <div className = "flex flex-col text-center absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
        <p className = "text-[#F8ECDC] font-jersey text-6xl">Zerobaseone </p>
        </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/bluelock.png" className = "h-45"/>
      <div className = "flex flex-col text-center absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
      <p className = "font-jersey text-[#F8ECDC] text-6xl">Blue Lock</p>
      </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/aldi.png" className = "h-45 "/>
        <div className = "flex flex-col text-center absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
        <p className = " font-jersey text-[#F8ECDC] text-5xl">Alpha Drive One</p>
        </div>
        </div>

      
      <div className = "relative group h-45 overflow-hidden">
        <img src = "/prsk.png" className = "h-45"/>
        <div className = "flex flex-col text-center absolute bg-black/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
        <p className = "text-[#F8ECDC] font-jersey text-5xl ">Project Sekai</p>
        </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/zb1.png" className = "h-45"/>
        <div className = "flex flex-col text-center absolute bg-black/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
        <p className = "text-[#F8ECDC] font-jersey text-5xl">Zerobaseone </p>
        </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/bluelock.png" className = "h-45"/>
      <div className = "flex flex-col text-center absolute bg-black/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
      <p className = "font-jersey text-[#F8ECDC] text-5xl">Blue Lock</p>
      </div>
      </div>


      </div>

    </div>




</div>
    </>
  )
}

export default App
