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
      <div>
      <p className = "font-newsreader text-3xl mt-10">
        ooooh I have a life?
      </p>
      <img src = "/lineee1.png" className = "w-90 h-0.5 mt-14 -ml-90"/>
      </div>
      <p className = "font-kapakana text-9xl">
        Stuff I Do
      </p>
    </div>

    <div className="grid grid-cols-3 gap-6 p-8 font-jersey text-[#F8ECDC] text-6xl">
    <div className="relative group overflow-hidden bg-[#304076] rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105 flex flex-col text-center justify-center">
      <img 
      src="/frc.JPEG"
      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
      <div className="absolute inset-0 bg-[#304076]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <h1 className="relative z-10">Frc</h1>
      <p className="relative z-10 text-xl font-newsreader">ooooooh build robot cool mm yummy gearjam</p>
    </div>

    <div className="relative group overflow-hidden bg-[#304076] rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105 flex flex-col text-center justify-center">
      <img 
      src="/flagship.JPG"
      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
       <div className="absolute inset-0 bg-[#304076]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <h1 className = "relative z-10">Hack Club</h1>
        <p className = "text-xl relative z-10 font-newsreader">the real reason I made this website</p>
      </div>

      <div className="relative group overflow-hidden bg-[#304076] rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105 flex flex-col text-center justify-center">
      <img
        src = "/band.JPG"
        className = "absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        <div className="absolute inset-0 bg-[#304076]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <h1 className = "relative z-10">Band</h1>
        <p className = "text-xl relative z-10 font-newsreader">I play an instrument that's almost as tall as me</p>
      </div>

      <div className="relative group overflow-hidden bg-[#304076] rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105 flex flex-col text-center justify-center">
        <img
        src = "/beaches.png"
        className = "absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105 flex flex-col text-center justify-center "/>
        <div className = "absolute inset-0 bg-[#304076]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <h1 className = "relative z-10 ">Art</h1>
        <p className = "text-xl relative z-10 font-newsreader">Been drawing for 8 years but im still buns </p>
      </div>

      <div className="bg-[#304076] rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105 flex flex-col text-center justify-center">
        <h1>Photototo</h1>
        <p className = "text-xl font-newsreader">and sometimes videoeoeoeo</p>
      </div>

      <div className="relative group overflow-hidden bg-[#304076] rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105 flex flex-col text-center justify-center">
      <img
      src = "/gambling.jpg"
      className = "absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105 flex flex-col text-center justify-center "/>
        <div className = "absolute inset-0 bg-[#304076]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <h1 className = "relative z-10">Gambling</h1>
        <p className = "text-xl font-newsreader relative z-10">99% of gamblers quit before they hit big</p>
      </div>
    </div>
  </div>

  <div className = "flex flex-row justify-between text-[#304076] mt-20 items-center">
    <div className = "flex flex-col items-start justify-start lg:ml-20 sm:ml-10 w-170">
      <p className = "font-kapakana sm:text-[8rem] lg:text-[12rem] sm:mb-10 sm:w-100 lg:w-200">Fun Facts</p>
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
    
    <img src = "/polaroidlove.png" className = "w-120 h-160 lg:mr-25 sm:ml-10 mt-20"/>

  </div>


  <div className = "text-[#304076] text-right mr-10">
    <p className = "font-kapakana text-[12rem]"> Interests</p>
    <p className = "font-newsreader text-2xl -mt-20">Various fandoms i'm in!</p>
    </div> 

    <div className = "flex flex-col mt-10">
      <div className = "flex flex-row gap-2 w-max h-45 animate-scroll-left">
      
      <div className = "relative group h-45 overflow-hidden">
        <img src = "/orv.png" className = "h-45"/>
        <div className = "text-center flex flex-col absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
          <p className = " text-[#F8ECDC] font-jersey text-6xl ">Omniscent Reader's Viewpoint</p>
        </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/svt.png" className = "h-45"/>
        <div className = "flex flex-col text-center absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
        <p className = "text-[#F8ECDC] font-jersey text-6xl ">Seventeen</p>
        </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/tbhk.png" className = "h-45"/>
        <div className = "flex flex-col text-center absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
        <p className = "text-[#F8ECDC] font-jersey text-6xl"> Toilet Bound Hanako Kun </p>
        </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/alnst.png" className = "h-45"/>
      <div className = "flex flex-col text-center absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
      <p className = "font-jersey text-[#F8ECDC] text-6xl">Alien Stage</p>
      </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/orv.png" className = "h-45"/>
        <div className = "text-center flex flex-col absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
          <p className = " text-[#F8ECDC] font-jersey text-6xl ">Omniscent Reader's Viewpoint</p>
        </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/svt.png" className = "h-45"/>
        <div className = "flex flex-col text-center absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
        <p className = "text-[#F8ECDC] font-jersey text-6xl ">Seventeen</p>
        </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/tbhk.png" className = "h-45"/>
        <div className = "flex flex-col text-center absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
        <p className = "text-[#F8ECDC] font-jersey text-6xl"> Toilet Bound Hanako Kun </p>
        </div>
      </div>

      <div className = "relative group h-45 overflow-hidden">
        <img src = "/alnst.png" className = "h-45"/>
      <div className = "flex flex-col text-center absolute bg-[#304076]/60 opacity-0 group-hover:opacity-100 justify-end transition-opacity duration-200 inset-0">
      <p className = "font-jersey text-[#F8ECDC] text-6xl">Alien Stage</p>
      </div>
      </div>
      
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

      <div className = "flex text-left w-130 font-newsreader text-xl ml-20 mt-5 text-[#304076] mb-20">
        <p>If we have any similar interests, please HMU! I’m super down to yap about this stuff</p>
      </div>
    </div>


</div>
    </>
  )
}

export default App
