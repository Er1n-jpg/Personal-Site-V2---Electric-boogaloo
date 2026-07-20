import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="bg-[#F8ECDC] w-full flex flex-col top-0">
  <div className = "items-center">
    <div className = "flex flex-col justify-start text-left text-[#304076]">
      <div className = "flex flex-row gap-6">
      <p className = "font-kapakana text-9xl "> Projects</p>
      <img src = "/projline.png" className = "h-1 mt-20"></img>
      </div>
      <p className = "font-newsreader text-xl"></p>
    </div>
  </div>
</div>
    </>
  )
}

export default App
