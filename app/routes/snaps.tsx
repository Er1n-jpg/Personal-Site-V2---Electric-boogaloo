import {useState} from "react"

const imgArray = [
    {
        index: 1,
        src: "",
        description: "idk idk lalalallaa"
    },{
        
    }
]

function PhotoItem({index, src, description}: {
    index: string,
    src:string,
    description:string,
}){
    return(
        <div className = "lg:h-24 bg-url[{description}] flex flex-col items-enter justify-end text-left">
            <div>
            <p className = "text-lg">{description}</p>
            </div>
        </div>
    )
}
function App(){
    return(
        <div className = "h-screen bg-black">
        </div>
    )
}