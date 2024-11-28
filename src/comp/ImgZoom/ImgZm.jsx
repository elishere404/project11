import React, { useRef } from 'react';

function ImageZoom() {
  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = 'scale(1.5)';
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = 'scale(1)';
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <img
        ref={imgRef}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrl7cz6MPLQpAlviFJ7wloXzbhGvZ5qUaPQ&s"
        alt="DK"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-72 h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out"
      />
    </div>
  );
}

export default ImageZoom;
