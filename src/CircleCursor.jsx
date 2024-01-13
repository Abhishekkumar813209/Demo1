import React, { useState, useEffect } from 'react';
// import './CursorCircle.css';
import './CircleCursor.css'
const CursorCircle = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX+40, y: e.clientY+40 });
      setIsMoving(true);

      // Set a timeout to consider the cursor as stopped after 1 second of inactivity
      const timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 1000);

      // Clear the timeout on mouse move
      document.addEventListener('mousemove', () => {
        clearTimeout(timeoutId);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-circle ${isMoving ? 'moving' : ''}`}
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      ></div>
    </>
  );
};

export default CursorCircle;
