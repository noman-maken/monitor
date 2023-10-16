'use client'
import React, { useEffect } from 'react';
import ThreeDMonitor from './screen/page';

const Home = () => {
  useEffect(() => {
    // Turn on the screen when the component mounts
    const screen = document.getElementById('monitor-screen');
    if (screen) {
      screen.classList.add('on');
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <ThreeDMonitor />
    </div>
  );
};

export default Home;
