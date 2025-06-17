import { useState } from 'react';
import background from '../assets/videoview.png';
import playV from '../assets/playvideo.png';
import video from '../video/furniture.mp4'

const VideoView = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
     setTimeout(() => {
      setIsPlaying(false);
    }, 67000);
  };

  return (
    <div className="w-full h-[450px] relative">
      <img src={background} alt="back" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {!isPlaying ? (
          <img
            src={playV}
            alt="play video"
            className="w-[80%] h-[90%] absolute top-[50%] cursor-pointer hover:scale-110 transition"
            onClick={handlePlay}
          />
        ) : (
          <iframe
            className="absolute top-[50%] w-[90%] h-[90%] max-w-[800px] max-h-[450px] rounded-lg shadow-xl"
            src={ video }
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default VideoView;
