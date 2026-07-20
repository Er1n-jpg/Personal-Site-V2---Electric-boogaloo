import { useState } from 'react'

const blogPost = [
  {
    title: "A hackathon in china changed my life",
    description: "Fallout 26",
    url: "",
    index: "1"
  },
  {
    title: "AI is stripping the humanity out of things idk",
    description: "life is too damn convienient now",
    url: "",
    index: "2"
  },
  {
    title: "Sasaengs are weird",
    description: "I yap about weird fan behaviour in kpop communities",
    url: "",
    index: "3"
  },
  {
    title: "My school's larping pandemic",
    description: "larp larp larp larp",
    url: "",
    index: "4"
  }
]

function DisplayItem({title, description, url, index}: {
  title: string,
  description: string,
  url: string,
  index: string,
}) {
  return(
    <a href={url}>
<div className="bg-[#304076] rounded-2xl flex flex-col text-left items-start justify-start p-6 h-90 overflow-hidden w-160">
  <p className="font-newsreader text-6xl text-[#F8ECDC] break-words">{title}</p>
  <p className="font-newsreader text-base text-[#F8ECDC] mt-2">{description}</p>
</div>
    </a>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className = "bg-[#F8ECDC] w-full flex flex-col top-0">

    <div className = "mt-20">
      <img src = "/starrypatch.png" className = "z-10 h-75 w-95 -mb-60"></img>

      <div className = "text-center -ml-10 text-[#304076]">
      <p className = "font-kapakana text-[18rem] -ml-5">
        (b)logs
      </p>
      <p className = "font-newsreader text-5xl -mt-10">A recollection of all my yaps</p>
      </div>

      <div className = "flex justify-end">
          <img src = "/swirlypatch.png" className = "z-10 h-65 w-105 -mt-40"></img>
      </div>
    </div>

<div className="grid grid-cols-2 gap-6 mt-20 mx-auto">
  {blogPost.map((item) => (
    <DisplayItem
      key={item.index}
      title={item.title}
      description={item.description}
      url={item.url} 
      index={item.index}    />
  ))}
</div>


</div>
    </>
  )
}

export default App
