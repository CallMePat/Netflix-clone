import React, { useEffect, useState } from "react";
import CloudflareVideoPlayer from "./Screens/CloudflareVideoPlayer";

const CloudflareBanner = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  useEffect(() => {
    if (!videos || videos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [videos]);

  if (!videos || videos.length === 0) return null;

  const video = videos[currentIndex];

  const handlePlayClick = () => {
    setSelectedVideoId(video.uid);
  };

  return (
    <header className="relative h-[448px] text-white object-contain">
      <div className="absolute w-full h-full">
        <img
          src={video.thumbnail}
          alt={video.meta.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="absolute bottom-32 ml-8">
        <h1 className="text-5xl font-bold mb-4">{video.meta.name}</h1>
        <div className="flex gap-4">
          <button
            className="cursor-pointer text-white outline-none border-none font-bold rounded px-8 mr-4 pt-2 
pb-2 hover:text-black hover:bg-[#e6e6e6] transition-all duration-200"
            style={{
              backgroundColor: `rgba(51, 51, 51, 0.5)`,
            }}
            onClick={handlePlayClick}
          >
            Play
          </button>
          <button
            className="cursor-pointer text-white outline-none border-none font-bold rounded px-8 mr-4 pt-2 
                     pb-2 hover:text-black hover:bg-[#e6e6e6] transition-all duration-200"
            style={{
              backgroundColor: `rgba(51, 51, 51, 0.5)`,
            }}
          >
            {" "}
            More Info
          </button>
        </div>
        <p className="w-96 text-sm mt-4">{video.meta.description}</p>
      </div>

      {selectedVideoId && (
        <CloudflareVideoPlayer
          videoId={selectedVideoId}
          onClose={() => setSelectedVideoId(null)}
        />
      )}
    </header>
  );
};

export default CloudflareBanner;
