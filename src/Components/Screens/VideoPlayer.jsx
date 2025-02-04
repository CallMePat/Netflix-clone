import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  PlayCircle,
  PauseCircle,
  Volume2,
  SkipForward,
  Subtitles,
  Settings,
  Maximize,
  ListVideo,
} from "lucide-react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ onBack, title, episode, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onBack();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onBack]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleSeek = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - bounds.left) / bounds.width;
    const time = percent * duration;
    playerRef.current?.seekTo(time);
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Top controls */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between z-10">
        <button
          onClick={onBack}
          className="text-white hover:opacity-75 transition-opacity"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
        <button className="text-white hover:opacity-75 transition-opacity">
          <ListVideo size={24} />
        </button>
      </div>

      {/* Video Player */}
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        width="100%"
        height="100%"
        playing={isPlaying}
        onProgress={handleProgress}
        onDuration={handleDuration}
        style={{ position: 'absolute', top: 0, left: 0 }}
        config={{
          youtube: {
            playerVars: { controls: 0 }
          }
        }}
      />

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
        {/* Progress bar */}
        <div 
          className="relative w-full h-1 bg-white/30 mb-4 cursor-pointer"
          onClick={handleSeek}
        >
          <div
            className="absolute h-full bg-red-600"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
          <div
            className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full"
            style={{ left: `${(currentTime / duration) * 100}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="hover:opacity-75 transition-opacity"
            >
              {isPlaying ? <PauseCircle size={32} /> : <PlayCircle size={32} />}
            </button>
            <Volume2 size={24} />
            <span className="text-sm">{formatTime(currentTime)}</span>
          </div>

          <div className="text-center text-sm font-medium">
            {title} {episode}
          </div>

          <div className="flex items-center gap-4">
            <SkipForward size={24} />
            <Settings size={24} />
            <Subtitles size={24} />
            <Maximize size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;