import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="relative w-full ">
      <div className="bg-[#F8ECDC] flex flex-col top-0 w-full">
        <div className="w-full h-190 bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('/soobin.png')" }}>
          <div className="flex flex-col w-full mt-30 ">
            <div className="p-8 pb-0 justify-between flex">
              <div>
                <h2 className="font-kapakana text-9xl text-[#304076] -mb-40 ml-70">Hi i'm</h2>
              </div>

              <div>
                <img src="bluestars.png" className="z-10 w-50 h-50 -mb-100 mr-90"></img>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-[22rem] font-bold font-jersey text-[#304076] tracking-wider -mt-10 -ml-20">Erin</h1>
            </div>
          </div>



          <div className="flex justify-between items-center px-8 pb-8 mt-8 gap-x-16 font-newsreader text-[#304076]">
            <div className="flex gap-4 flex-row -mt-70 ml-60">
              <a href = "https://github.com/Er1n-jpg">
              <img src = "/gh.png" className = "h-20"></img>
              </a>
              <a href = "https://www.instagram.com/erin_0390/">
              <img src = "/insta.png" className = "h-20"></img>
              </a>

              <a href = "https://www.linkedin.com/in/erin-nguyen-60b0a1265/">
              <img src = "/liknledn.png" className = "h-20"></img>
              </a>
            </div>

            <div className="text-right mr-100 -mt-70">
              <h1 className="text-5xl">Student @EOMSS</h1>
              <p className="text-2xl">(Earl of march Secondary School)</p>
            </div>
          </div>

          <div className="w-full h-48 bg-cover bg-center -mt-10 bg-linear-to-b from-transparent from-0% to-[#F8ECDC] to-80% z-10"></div>
      </div>

      
      <div className = "w-full flex flex-row items-center justify-between h-100 ">
      <div className = "w-120 ml-40 text-[#304076]">
        <h1 className = "font-kapakana text-[13rem] -mb-20 ml-5">Yoohoo</h1>
          <div className = "font-newsreader text-2xl">
            <p>Welcome to my little corner of the internet! (that hasn’t been claimed since im too poor to buy a domain)</p>
            <p className = "mt-2">I’m Erin a 16 year old student from Ottawa, Ontario</p>
            <p className = "mt-2">If i’m not sleeping I like to make projects, do art, build robots and play instruments</p>
          </div>
      </div>

        <div className = "w-150 h-150 mr-30 flex items-center justify-center ">
          <a href="/about">
            <img src="intro.png" className="mt-30 transition-transform duration-300 hover:scale-110"/>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-50 text-[#304076]">
        <h1 className="font-kapakana text-8xl">take a look at...</h1>
      </div>
      <div className = "flex items-center justify-between w-full mt-5 mb-20">

        <a href = "/blog" className = "flex flex-col justify-center items-center ml-50 text-[#304076] transition-transform duration-300 hover:scale-105">
          <img src = "/chiiiken.png" className = "w-120 h-90"></img>
          <h1 className = "font-kapakana text-8xl">(B)logs</h1>
          <p className = "font-newsreader text-2xl">My amazing writing skills</p>
        </a>


      
        <a href = "/projects" className = "flex flex-col justify-center items-center mr-50 text-[#304076] transition-transform duration-300 hover:scale-105">
          <img src = "/chiiiken.png" className = "w-120 h-90"></img>
          <h1 className = "font-kapakana text-8xl">Projects</h1>
          <p className = "font-newsreader text-2xl">My creations :)</p>
        </a>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
