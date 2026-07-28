import { useState } from 'react'

const projArray = [
  {
    title: "ALD1FLIX",
    description: "A Kpop database for the KPOP group Alpha Drive One containg information on the group, members, discography and content ",
    ghurl: "https://github.com/Er1n-jpg/Ald1flix",
    demourl:"https://ald1flix.vercel.app/",
    Date: 2026/0o6/10,
    img:"",
    index:"1",
  },{
    title: "Alien Stage Clicker Game",
    description: "My very first godot game! It's a clicker game made based on the animated series alien stage, you gain currency by clicking and can spend it on accessories at the shop! All the art is drawn by me!",
    ghurl:"https://github.com/Er1n-jpg/Alnst-clicker-game",
    demourl: "https://koiyomon.itch.io/click-that-ivan",
    Date: 2025/12/30,
    img: "",
    index: "2",
  }, {
    title: "Mush-Root",
    description: "A Database of past tests where people can view and upload them, gamei-fying it for people with ADHD to make it simmilar to youtube with features like merge games, pomodoro timers, a mini subway surfers sreen and line following by mouse",
    ghurl: "https://github.com/sophiayduan/mushroot",
    demourl: "https://github.com/sophiayduan/mushroot",
    Date: 2026/0o5/15,
    img: "",
    index: "3",
  }, {
    title: "Blink too long (your grades are gone)",
    description: "An OpenCV application which detects if your eyes are open or closed, if they're closed for too long it sends an email to your teacher through the javamail API",
    ghurl: "",
    demourl: "",
    Date: 2026/0o2/18,
    img: "",
    index: "4",
  }, {
    title: "Shrimp Fried Rice",
    description: "Top 5 project at a hackathon called campfire flagship, you play as a shrimp fighting off evil vegetables to pay off your debt, the game is a combination between a visual novel and combat game. INDENDED TO BE PLAYED WITH A CUSTOM CONTROLLER!!",
    ghurl: "https://github.com/gbtsui/shrimp-fried-rice",
    demourl: "",
    Date: 2026/0o2/22,
    img: "",
    index: "5"
  }, {
    title: "This Website",
    description: "A remake of my old personal website, using proper figma conventions, react and tailwind css",
    ghurl: "https://github.com/Er1n-jpg/Personal-website",
    demourl: "https://koiyomon.vercel.app",
    date: 2026/0o7/20,
    img: "",
    index: "6"
  }
]

function ProjectItem({title, description, ghurl, demourl, Date, img, index}: {
  title: string,
  description: string,
  ghurl: string,
  demourl: string,
  Date: Date,
  img: string,
  index: string
}) {
  return (
    <div className="relative bg-[#304076] w-180 flex flex-row h-80 items-center justify-center">
      <a href={demourl} className="absolute inset-0 z-0" aria-label={title}></a>

      <img src={img} className="rounded-lg h-70 relative z-10 pointer-events-none" />

      <div className="flex text-left font-newsreader text-[#304076] relative z-10 justify-between">
        <div className = "flex flex-col gap-2">
          <h1 className="text-3xl">{title}</h1>
          <p className="text-2xl -mt-10">{description}</p>
        </div>
        <a href={ghurl} className="relative z-20" onClick={(e) => e.stopPropagation()}>
          <img className = "h-20 w-20" src = "./minigh"></img>
        </a>
      </div>
    </div>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="bg-[#F8ECDC] w-full flex flex-col top-0">
  <div className = "items-center">
    <div className = "flex flex-col justify-start text-left text-[#304076]">
      <div className = "flex flex-row gap-6 mt-20 ml-10">
      <p className = "font-kapakana text-[14rem] "> Projects</p>
      <img src = "/projline.png" className = "h-0.5 w-80 mt-40"></img>
      </div>
      <div className = "w-100 -mt-30 ml-70">
      <p className = "font-newsreader text-xl "> Disappointment or not, I love making (and breaking) things!</p>
      </div>

      <div className = "">

      </div>

      <div className = "">
        
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App
