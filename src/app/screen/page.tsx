'use client'
import React, { useEffect } from 'react';

const ThreeDMonitor = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Monitor frame */}
      <div className="border-4 border-gray-500 w-3/4 h-3/4 mx-auto my-4 relative rounded-md">
        {/* Screen */}
        <div
          className="h-full w-full bg-black"
          id="monitor-screen"
        >
          {/* This is where you'll embed your site using an iframe */}
          <iframe
            src="https://www.itsolp.com/"
            className="w-full h-full"
            title="Embedded Website"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ThreeDMonitor;
