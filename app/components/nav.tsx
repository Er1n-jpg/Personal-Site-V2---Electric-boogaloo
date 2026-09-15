import { Link, NavLink } from "react-router";
import { useState, useRef, useEffect} from "react";

const playlist = [
  { title: "Welcome Home - Alpha Drive One", src: "/WELCOME home.mp3" },
  { title: "Cheers to Youth - Seventeen", src: "/cheerstoyouth.mp3" },
  { title: "Orange Flower - Enhypen", src: "/orangeflower.mp3" },
  { title: "Setsuna Hanabi - Tommorow x together", src: "/setsuna hanabi.mp3" },
  { title: "Sticker - NCT 127", src: "/sticker.mp3" },
  { title: "My Youth - Covered by Jisung and Chenle", src: "/myyouth.mp3"},
];

export default function Nav() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() =>{
    if(audioRef.current){
      audioRef.current.volume = 0.5;
    }
},[]) 

  useEffect(() => {
    if(!audioRef.current) return;
    audioRef.current.load();
    if(isPlaying){
      audioRef.current.play().catch((err) => console.error("Music cannot play lah", err))
    }
  }, [trackIndex])

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      
    } else {
      audioRef.current.play().catch((err) => console.error("Music cannot play lah", err));
    }
    setIsPlaying((prev) => !prev);
  };

  const skipTrack = () => {
    setTrackIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const backTrack = () => {
    setTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  }

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-50 px-8 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto lg:text-3xl sm:text-4xl ">
        <audio
          ref={audioRef}
          src={encodeURI(playlist[trackIndex].src)}
          onEnded={skipTrack}
        />

        <div className="flex items-center justify-center gap-2 lg:-ml-30 sm:mr-20 lg:text-2xl sm:text-2xl mt-1.5">
          <button onClick={backTrack} className="text-[#304076] hover:text-[#9DAFE9] transition-colors font-jersey">
            {"<<"}
          </button>

          <button onClick={toggleMusic} className="text-[#304076] hover:text-[#9DAFE9] transition-colors font-jersey">
            {isPlaying ? "Pause" : "Play"}
          </button>

          <button onClick={skipTrack} className="text-[#304076] hover:text-[#9DAFE9] transition-colors font-jersey">
            {">>"}
          </button>

          <span className="text-[#304076] font-newsreader lg:text-lg sm:text-sm italic lg:ml-2 sm:-mr-15">
            {playlist[trackIndex].title}
          </span>

        </div>

        <div className="flex lg:gap-30 sm:gap-20">

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-[#304076] hover:text-[#9DAFE9] transition-colors font-jersey ${isActive ? "text-[#9DAFE9]" : ""
              }`
            }
          >
            Projects
          </NavLink>

         <NavLink
            to="/snaps"
            className={({ isActive }) =>
              `text-[#304076] hover:text-[#9DAFE9] transition-colors font-jersey ${isActive ? "text-[#9DAFE9]" : ""
              }`
            }
          >
            Snaps
          </NavLink>


          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[#304076] font-jersey hover:text-[#9DAFE9] transition-colors ${isActive ? "text-[#9DAFE9]" : ""
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-[#304076] font-jersey hover:text-[#9DAFE9] transition-colors ${isActive ? "text-[#9DAFE9]" : ""
              }`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[#304076] transition-colors hover:text-[#9DAFE9] font-jersey ${isActive ? "text-[#9DAFE9]" : ""
              }`
            }
          >
            !!!
          </NavLink>

        </div>
      </div>
    </nav>
  );
}