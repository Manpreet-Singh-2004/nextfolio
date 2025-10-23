import React from "react";

const styles = `
  @keyframes slow-rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  .rotating-image {
    width: 250px;
    height: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 👈 ensures instant centering before animation kicks in */
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

export const Loading = ({ className = "" }) => {
  return (
    <div
      className={`design-wrapper w-full h-full bg-black flex justify-center items-center ${className}`}
    >
      <style jsx global>{styles}</style>

      <div className="relative w-full h-full">
        {/* Rotating Circle (Background) */}
        <img
          src="/Circle.png"
          width="250"
          height="250"
          alt="Rotating background circle"
          className="rotating-image rounded-full shadow-2xl"
        />

        {/* Static Triangle (Foreground) */}
        <img
          src="/Triangle.png"
          width="125"
          height="125"
          alt="Static foreground triangle"
          className="static-image rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};
