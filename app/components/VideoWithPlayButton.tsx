'use client';

import { useState, useRef } from 'react';

interface VideoWithPlayButtonProps {
  src: string;
  poster: string;
  title?: string;
}

export default function VideoWithPlayButton({ src, poster, title = 'Video Tutorial' }: VideoWithPlayButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full rounded-lg shadow-xl overflow-hidden" style={{ maxHeight: '48vh' }}>
      <video
        ref={videoRef}
        controls
        preload="metadata"
        poster={poster}
        className="w-full h-full object-contain"
        style={{ maxHeight: '48vh' }}
        onPause={handlePause}
        onPlay={handlePlay}
        onEnded={handlePause}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag. Please use a modern browser like Chrome.
      </video>
      
      {/* Play Button Overlay - Only visible when video is not playing */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 transition-opacity duration-300 hover:bg-black/30"
          onClick={handlePlayClick}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-110">
            <svg 
              className="w-10 h-10 md:w-12 md:h-12 text-blue-600 ml-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
