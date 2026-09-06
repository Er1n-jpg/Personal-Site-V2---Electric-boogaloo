import { Link, NavLink } from "react-router";
import { useState, useRef, useEffect} from "react";

export default function Nav() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playlist =[
    { title: "Placeholder lalalal", src: ""},
    { title: "Placeholder 2 lalala", src: ""}
  ]

  useEffect(() => {
    if(!audioRef.current) return;
    audioRef.current.load();
    if(isPlaying){
      audioRef.current.play().catch((err) => console.error("Music cannot play lah", err))
    }
  })

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
    setTrackIndex((prev) => (prev +1) % playlist.length);
    setIsPlaying(true);
  };

  const backTrack = () => {
    setTrackIndex((prev) => (prev-1) % playlist.length);
    setIsPlaying(true);
  }

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-50 px-8 py-4">
      <div className="flex items-center justify-end max-w-6xl mx-auto text-3xl">
        <div className="flex gap-30">
          <button onClick={toggleMusic} className="text-[#304076] hover:text-[#9DAFE9] transition-colors font-jersey">
            {isPlaying ? "Pause" : "Play"}
          </button>

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
              `text-[#304076] transition-colors font-jersey ${isActive ? "text-[#9DAFE9]" : ""
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