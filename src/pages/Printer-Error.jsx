import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import error from "../assets/error_img.png";

const Error = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageRef = useRef(null);

  // Function to enable fullscreen mode for the image
  const enableFullscreen = () => {
    if (!isFullscreen && imageRef.current) {
      if (imageRef.current.requestFullscreen) {
        imageRef.current.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
        setIsFullscreen(true);
      }
    }
  };

  return (
    <>
      <div
        className="container"
        onClick={enableFullscreen} // Enable fullscreen on click
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          backgroundColor: "#f8f9fa",
          position: "relative",
        }}
      >
        {/* Error Image */}
        <div style={{ position: "relative" }}>
          <img
            ref={imageRef}
            src={error}
            alt="Error"
            className="error-image"
            style={{
              maxWidth: "100vw",
              maxHeight: "100vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />

          {/* Live Chat Now Button */}
          <Link
            to="https://tawk.to/chat/65be18d78d261e1b5f5bf30e/1hln923ec"
            className="btn btn-danger btn-lg btn-professional"
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              zIndex: 10,
            }}
          >
            Live Chat Now
          </Link>
        </div>
      </div>

      <style>
        {`
          .btn-professional {
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 12px 24px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .btn-professional:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 8px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </>
  );
};

export default Error;
