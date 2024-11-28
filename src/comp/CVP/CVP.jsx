import React, { useRef } from 'react';

function CustomVideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
      <video
        ref={videoRef}
        width="600"
        className="rounded-lg shadow-md mb-4"
        controls
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex gap-4">
        <button
          onClick={playVideo}
          className="bg-green-500 text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Play
        </button>
        <button
          onClick={pauseVideo}
          className="bg-red-500 text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Pause
        </button>
      </div>
    </div>
  );
}

export default CustomVideoPlayer;
