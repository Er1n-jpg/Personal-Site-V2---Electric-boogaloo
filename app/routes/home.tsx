import { useState } from 'react'
import toast from 'react-hot-toast'


function App() {
  const [count, setCount] = useState(0)
  const [toastState, setToast] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)
  const [toastVisible, setToastVisible] = useState(false)

  const showToast = (data: {type: 'success' | 'error' ; message:string }) => {
      setToast(data)
      requestAnimationFrame(() => setToastVisible(true))
      
      setTimeout(() => {
        setToastVisible(false)
        setTimeout(() => setToast(null), 300)
      }, 4000)
  }

  const handleToaster = async (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        showToast({ type: 'success', message: 'Sent! Ill read through all of them later' })
        form.reset()
      } else {
        showToast({ type: 'error', message: 'Add some text!!'})
      }
    } catch (err) {
      showToast({ type: 'error', message: 'Network error — try again later.' })
    }

  }

return (
  <>
    <div className="relative w-full overflow-x-hidden">
      <div className="bg-[#F8ECDC] flex flex-col top-0 w-full items-center justify-center">
        <div className="w-full h-190 bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('/soobin.png')" }}>
          <div className="flex flex-col w-full mt-30 ">
            <div className="p-8 pb-0 justify-between flex">
              <div>
                <h2 className="font-kapakana text-4xl sm:text-9xl lg:text-9xl -mb-10 lg:-mb-40 ml-4 lg:ml-70 text-[#304076] sm:-mb-25">Hi i'm</h2>
              </div>

              <div>
                <img src="bluestars.png" className="z-10 w-50 h-50 -mb-100 lg:mr-90 sm:mr-30"></img>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-[22rem] font-bold font-jersey text-[#304076] tracking-wider lg:-mt-10 -ml-20 sm:-mt-20">Erin</h1>
            </div>
          </div>

          <div className="flex justify-between items-center lg:px-75 sm:px-8 pb-8 mt-8 sm:gap-x-20 px-15 sm:mt-20 lg:mt-10 font-newsreader text-[#304076]">
            <div className="flex gap-4 flex-row -mt-70 ">
              <a href="https://github.com/Er1n-jpg">
                <img src="/gh.png" className="h-20"></img>
              </a>
              <a href="https://www.instagram.com/erin_0390/">
                <img src="/insta.png" className="h-20"></img>
              </a>

              <a href="https://www.linkedin.com/in/erin-nguyen-60b0a1265/">
                <img src="/liknledn.png" className="h-20"></img>
              </a>
            </div>

            <div className="text-right -mt-70 mr-10">
              <h1 className="text-5xl">Student @EOMSS</h1>
              <p className="text-2xl">(Earl of march Secondary School)</p>
            </div>
          </div>

          <div className="w-full h-48 bg-cover bg-center -mt-10 bg-linear-to-b from-transparent from-0% to-[#F8ECDC] to-80% z-10"></div>
        </div>

        <div className="w-full flex flex-row items-center justify-between h-100 sm:px-8 lg:px-40 gap-10 xl:gap-0">
          <div className="w-120 text-[#304076]">
            <h1 className="font-kapakana lg:text-[13rem] sm:text-[11rem] lg:-mb-20 sm:-mb-10 ml-5 ">Yoohoo</h1>
            <div className="font-newsreader lg:text-2xl sm:text-lg">
              <p>Welcome to my little corner of the internet! (that hasn’t been claimed since im too poor to buy a domain)</p>
              <p className="mt-2">I’m Erin a 16 year old student from Ottawa, Ontario</p>
              <p className="mt-2">If i’m not sleeping I like to make projects, do art, build robots and play instruments</p>
            </div>
          </div>

          <div className="w-150 h-150 flex items-center justify-center ">
            <a href="/about">
              <img src="intro.png" className="mt-30 transition-transform duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:mt-50 sm:mt-20 text-[#304076]">
          <h1 className="font-kapakana text-8xl">take a look at...</h1>
        </div>
        <div className="flex items-center lg:flex-row lg:justify-between mt-5 mb-20 lg:gap-10 xl:gap-30 sm:gap-5 sm:flex-col">

          <a href="/blog" className="flex flex-col justify-center items-center text-[#304076] transition-transform duration-300 hover:scale-105">
            <img src="/boog.png" className="lg:w-120 lg:h-90 sm:w-180"></img>
            <h1 className="font-kapakana lg:text-8xl sm:text-[8rem] sm:-mb-5 lg:mb-0">(B)logs</h1>
            <p className="font-newsreader text-2xl sm:mb-20 lg:mb-0">My amazing writing skills</p>
          </a>

          <a href="/projects" className="flex flex-col justify-center items-center text-[#304076] transition-transform duration-300 hover:scale-105">
            <img src="/proj.png" className="lg:w-120 lg:h-90 sm:w-180"></img>
            <h1 className="font-kapakana lg:text-8xl sm:text-[8rem] sm:-mb-5 lg:mb-0">Projects</h1>
            <p className="font-newsreader text-2xl">My creations :)</p>
          </a>
        </div>

        <div className="flex items-center justify-center">
          <div className="lg:w-[80rem] sm:w-[59rem] bg-[#304076] flex flex-col items-start py-10 px-10 text-[#F8ECDC] rounded-xl">
            <div className="flex flex-row justify-between items-center lg:gap-[30rem] sm:gap-[9rem]">
              <h1 className="font-kapakana text-8xl">Message me!</h1>
              <p className="text-4xl font-newsreader">Leave a message for me!</p>
            </div>

            <div className="flex flex-row mt-10 mb-5">
              <form action="https://formspree.io/f/mkjnvyvp" method="POST" onSubmit={handleToaster} className="flex flex-row mb-5">
                <input type="text" name="message" className="lg:w-[60rem] sm:w-[40rem] h-20 bg-[#F8ECDC] rounded-lg mr-5 text-[#304076] text-4xl font-newsreader justify-center py-5 px-5"
                  placeholder='Yap here!' />
                <button type="submit" className="w-[14rem] h-20 bg-[#F8ECDC] rounded-lg text-[#304076] text-4xl font-newsreader hover:cursor-pointer hover:scale-105 duration-200">
                  Send!
                </button>
              </form>

              {toastState && (
                <div
                  className={`fixed bottom-8 right-8 z-50 px-6 py-4 rounded-lg text-lg font-newsreader transition-in-and-out duration-300
            ${toastState.type === 'success' ? 'bg-[#304076] text-[#F8ECDC]' : 'bg-transparent border-[#304676] font-newsreader text-[#304076]'}`}
                >
                  {toastState.message}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex text-center justify-center font-newsreader text-[#304076] mb-10 mt-10 text-xl">
          <p>Made with ♡ by yours truly</p>
        </div>
      </div>
    </div>
  </>
)
}

export default App
