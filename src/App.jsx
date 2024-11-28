import React from 'react';
import Timer from './comp/Timer/Timer.jsx';
import ImageZoom from './comp/ImgZoom/ImgZm.jsx';
import CustomVideoPlayer from './comp/CVP/CVP.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        React stuff
      </h1>
      
      <section className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Timer</h2>
        <Timer />
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Image Zoom</h2>
        <ImageZoom />
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Custom Video Player</h2>
        <CustomVideoPlayer />
      </section>
    </div>
  );
}

export default App;
