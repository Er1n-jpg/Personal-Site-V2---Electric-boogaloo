import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className = "bg-[#F8ECDC] h-screen flex flex-col fixed top-0 w-full">
  <div className="w-full h-190 bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('/soobin.png')"}}>
<div className="flex flex-col w-full mt-20 ">
  <div className="p-8 pb-0 justify-between">
    <div>
    <h2 className="font-kapakana text-9xl text-[#304076] -mb-40 ml-70">Hi i'm</h2>
    </div>

    <div>
      <img ></img>
    </div>
  </div>

  <div className="flex items-center justify-center">
    <h1 className="text-[22rem] font-bold font-jersey text-[#304076] tracking-wider -mt-10 -ml-20">Erin</h1>
  </div>
</div>



<div className="flex justify-between items-center px-8 pb-8 mt-4 gap-x-16 font-newsreader text-[#304076]">
  <div className="flex gap-4">
    <h1>hfkjdkjh</h1>
  </div>
  <div className="text-right mr-100 -mt-70">
    <h1 className="text-5xl">Student @EOMSS</h1>
    <p className="text-2xl">(Earl of march Secondary School)</p>
  </div>
</div>

</div>
</div>
    </>
  )
}

export default App
