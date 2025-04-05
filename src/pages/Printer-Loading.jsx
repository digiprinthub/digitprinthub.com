import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiServer, FiMonitor } from "react-icons/fi"; // Icons for server and PC
import { Footer, Navbar } from "../components"; // Import Footer and Navbar components

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [status, setStatus] = useState("Downloading and Installing...");
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate connection establishment
    setTimeout(() => {
      setIsConnected(true);
    }, 1000); // Connection established after 1 second

    // Simulate a 15-second download and installation process
    const totalDuration = 15000; // 15 seconds
    const intervalTime = 100; // Update every 100ms
    const increment = (intervalTime / totalDuration) * 100; // Progress increment per interval

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return Math.min(prevProgress + increment, 100);
        }
        clearInterval(interval);
        return 100;
      });
    }, intervalTime);

    // Handle completion and failure
    if (progress >= 100) {
      setStatus("Installation Failed!");
      setTimeout(() => {
        navigate("/printer/error"); // Redirect to error page
      }, 2000); // Wait 2 seconds before redirecting
    }

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [progress, navigate]);

  return (
    <div style={styles.pageContainer}>
     
      <div style={styles.container}>
        <h1 style={styles.title}>Installing Printer Driver</h1>
        <p style={styles.subtitle}>
          Please wait while we download and install the driver for your printer.
          This process may take a few moments.
        </p>

        {/* Connection Visualization */}
        <div style={styles.connectionContainer}>
          <FiServer style={styles.icon} />
          <div style={styles.wireContainer}>
            <div
              style={{
                ...styles.wire,
                width: isConnected ? "100%" : "0%", // Animate wire connection
              }}
            />
          </div>
          <FiMonitor style={styles.icon} />
        </div>
        <p style={styles.connectionStatus}>
          {isConnected ? "Connected to Server" : "Establishing Connection..."}
        </p>

        {/* Progress Bar */}
        <div style={styles.progressContainer}>
          <div
            style={{
              ...styles.progressBar,
              width: `${progress}%`,
              backgroundColor: progress >= 100 ? "#e63946" : "#1a3c5e", // Red on failure
            }}
          />
        </div>
        <p style={styles.progressText}>Progress: {Math.round(progress)}%</p>

        {/* Status Message */}
        <p
          style={{
            ...styles.statusMessage,
            color: progress >= 100 ? "#e63946" : "#1a3c5e", // Red on failure
          }}
        >
          {status}
        </p>
      </div>
      
    </div>
  );
};

// Styling
const styles = {
  pageContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#f5f7fa", // Light background for a professional look
  },
  container: {
    width: "600px", // Increased width for a larger UI
    margin: "60px auto", // More margin for better spacing
    padding: "40px", // Increased padding
    textAlign: "center",
    border: "1px solid #e0e0e0",
    borderRadius: "16px", // Slightly larger border radius
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)", // Deeper shadow for a more professional look
  },
  title: {
    fontSize: "36px", // Larger font size
    fontWeight: "700", // Bolder font
    color: "#1a3c5e", // Dark blue for a professional tone
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "18px", // Larger font size
    color: "#666",
    marginBottom: "30px", // More spacing
    lineHeight: "1.5", // Better readability
  },
  connectionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px", // More spacing
  },
  icon: {
    fontSize: "50px", // Larger icons
    color: "#1a3c5e",
  },
  wireContainer: {
    width: "120px", // Wider wire for a larger UI
    height: "6px", // Thicker wire
    backgroundColor: "#e0e0e0",
    margin: "0 15px", // More spacing between icons
    borderRadius: "3px",
    overflow: "hidden",
  },
  wire: {
    height: "100%",
    backgroundColor: "#4caf50", // Green wire to indicate connection
    transition: "width 1s ease-in-out", // Smooth animation for wire
  },
  connectionStatus: {
    fontSize: "16px", // Larger font size
    fontWeight: "500",
    color: "#4caf50", // Green for connected status
    marginBottom: "30px", // More spacing
  },
  progressContainer: {
    width: "100%",
    height: "14px", // Thicker progress bar
    backgroundColor: "#e0e0e0",
    borderRadius: "7px", // Slightly larger border radius
    overflow: "hidden",
    marginBottom: "15px",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1a3c5e", // Dark blue progress bar (red on failure)
    transition: "width 0.1s linear", // Smooth progress animation
  },
  progressText: {
    fontSize: "16px", // Larger font size
    color: "#666",
    marginBottom: "30px", // More spacing
  },
  statusMessage: {
    fontSize: "20px", // Larger font size
    fontWeight: "600",
    color: "#1a3c5e", // Dark blue (red on failure)
  },
};

export default Loading;