import { useState, useRef, useEffect } from 'react'
import { data } from "react-router";

export async function loader() {
  return data(null, { status: 404 });
}


export default function NotFound() {
  const [count, setCount] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
  if (audioRef.current) {
    audioRef.current.muted = true
    audioRef.current.play().catch(err => console.log("blocked:", err))
  }
}, [])

  return (
    <>
      <div className="bg-[#F8ECDC] w-full flex flex-col top-0">
        <div className="items-center justify-center text-[#304076] text-center mt-50">
          <p className="font-kapakana lg:text-[16rem] sm:text-[25rem] -mb-20"> 404</p>
          <p className="font-newsreader lg:text-3xl sm:text-5xl">Not found in the system... waiiiit...</p>
          <audio ref={audioRef} src="/404.mp3"></audio>
            <button onClick={() => {
            if (audioRef.current) {
            audioRef.current.muted = false
            audioRef.current.play().catch(err => console.log("play on click failed:", err)) //claudina is debugging for me
             }
            }} className="font-newsreader hover:cursor-pointer lg:text-xl sm:text-4xl sm:mt-10">
            what's this?
            </button>
          
        </div>
      </div>
    </>
  )
}