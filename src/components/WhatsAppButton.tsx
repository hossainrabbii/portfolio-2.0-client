"use client";

import { useEffect, useState } from "react";

export default function WhatsAppHookIcon() {
  const [showHook, setShowHook] = useState(false);

  // Show the hook text after 3 seconds, hide after 6 seconds
  useEffect(() => {
    const inTimer = setTimeout(() => setShowHook(true), 3000);
    const outTimer = setTimeout(() => setShowHook(false), 9000);
    return () => {
      clearTimeout(inTimer);
      clearTimeout(outTimer);
    };
  }, []);

  const hookMessages = [
    "Got a cool project idea?",
    "Let's make your idea live!",
    "Need a dev to bring your vision?",
  ];

  // pick a random hook for variety
  const hookText =
    hookMessages[Math.floor(Math.random() * hookMessages.length)];

  return (
    <>
      <a
        href="https://wa.me/8801641994962"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 15px rgba(37,211,102,0.6)",
          cursor: "pointer",
          zIndex: 99999,
          animation: "pulse 1.8s infinite",
        }}
      >
        {/* WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.91 11.91 0 0012.01 0C5.38 0 .03 5.35.03 11.97c0 2.11.55 4.17 1.6 6.01L0 24l6.19-1.63a11.94 11.94 0 005.82 1.49h.01c6.63 0 11.98-5.35 11.98-11.97 0-3.19-1.24-6.19-3.48-8.41zM12.02 21.5a9.52 9.52 0 01-4.85-1.33l-.35-.21-3.67.96.98-3.58-.23-.37a9.53 9.53 0 01-1.46-5.06c0-5.26 4.29-9.54 9.57-9.54a9.5 9.5 0 016.74 2.8 9.48 9.48 0 012.8 6.74c0 5.26-4.29 9.54-9.53 9.54zm5.23-7.14c-.29-.14-1.72-.85-1.99-.95-.26-.1-.45-.14-.64.14-.19.29-.74.95-.9 1.14-.17.19-.33.21-.62.07-.29-.14-1.21-.45-2.3-1.43-.85-.76-1.42-1.7-1.59-1.98-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.72-.7 1.96-1.38.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
      </svg>

        {/* Sliding hook text */}
        <div
          style={{
            position: "absolute",
            right: showHook ? "70px" : "20px",
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "10px 15px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            transition: "right 0.5s ease, opacity 0.5s ease",
            opacity: showHook ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          {hookText}
        </div>
      </a>

      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </>
  );
}
