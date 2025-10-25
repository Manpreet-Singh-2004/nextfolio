"use client";
import React, { useState, useEffect } from "react";

const styles = `
  @keyframes slow-rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  .rotating-image {
    width: 250px;
    height: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: slow-rotate 10s linear infinite;
    z-index: 0;
  }

  .static-image {
    width: 125px;
    height: 125px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

export const LoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const handleMediaLoad = () => {
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => setIsLoading(false), 700); // fade duration
      }, 500); // short delay to ensure rendering
    };

    const images = Array.from(document.images);
    if (images.every((img) => img.complete)) {
      handleMediaLoad();
    } else {
      let loadedCount = 0;
      images.forEach((img) => {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === images.length) handleMediaLoad();
        });
        img.addEventListener("error", () => {
          loadedCount++;
          if (loadedCount === images.length) handleMediaLoad();
        });
      });
    }
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-700 ${
            isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div
            className="design-wrapper w-full h-full bg-black flex justify-center items-center"
          >
            <style jsx global>{styles}</style>
            <div className="relative w-full h-full">
              <img
                src="/Circle.png"
                width="250"
                height="250"
                alt="Rotating background circle"
                className="rotating-image rounded-full shadow-2xl"
              />
              <img
                src="/Triangle.png"
                width="125"
                height="125"
                alt="Static foreground triangle"
                className="static-image rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      )}

      <div className={isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}>
        {children}
      </div>
    </>
  );
};
