import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiServer, FiMonitor } from "react-icons/fi"; // Icons for server and PC

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [status, setStatus] = useState("Downloading and Installing...");
  const navigate = useNavigate();

  useEffect(() => {
    // Inject Google Ads Tracking Script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16956582763";
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag("js", new Date());
      gtag("config", "AW-16956582763"); // Google Ads Tracking ID
    };

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
      }, 2000);
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f7fa",
  },
  container: {
    width: "600px",
    padding: "40px",
    textAlign: "center",
    border: "1px solid #e0e0e0",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#1a3c5e",
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px",
    lineHeight: "1.5",
  },
  connectionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
  },
  icon: {
    fontSize: "50px",
    color: "#1a3c5e",
  },
  wireContainer: {
    width: "120px",
    height: "6px",
    backgroundColor: "#e0e0e0",
    margin: "0 15px",
    borderRadius: "3px",
    overflow: "hidden",
  },
  wire: {
    height: "100%",
    backgroundColor: "#4caf50",
    transition: "width 1s ease-in-out",
  },
  connectionStatus: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#4caf50",
    marginBottom: "30px",
  },
  progressContainer: {
    width: "100%",
    height: "14px",
    backgroundColor: "#e0e0e0",
    borderRadius: "7px",
    overflow: "hidden",
    marginBottom: "15px",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1a3c5e",
    transition: "width 0.1s linear",
  },
  progressText: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px",
  },
  statusMessage: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#1a3c5e",
  },
};

export default Loading;
