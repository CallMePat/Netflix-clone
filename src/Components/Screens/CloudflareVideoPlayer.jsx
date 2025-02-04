import React from 'react';

const CloudflareVideoPlayer = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="relative w-[100vw] h-[100vh]">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5  text-white text-xl"
        >
          ✕
        </button>
        <iframe
          title={`Cloudflare Video Player - ${videoId}`}
          src={`https://iframe.cloudflarestream.com/${videoId}`}
          className="w-full h-full"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
export default CloudflareVideoPlayer;