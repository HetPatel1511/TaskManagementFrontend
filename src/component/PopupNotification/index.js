import React, { useEffect, useState } from "react";
import emitter from "../../utils/notificationEmitter";

const PopupNotification = () => {
  const [notification, setNotification] = useState({
    message: "",
    type: "",
    isVisible: false,
  });

  useEffect(() => {
    const handleNotification = ({ message, type, duration=5000 }) => {
      setNotification({ message, type, isVisible: true });
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, isVisible: false }));
      }, duration);
    };

    // Listen for the 'notify' event
    emitter.on("notify", handleNotification);

    // Cleanup listener on unmount
    return () => {
      emitter.off("notify", handleNotification);
    };
  }, []);

  if (!notification.isVisible) return null; // Do not render if there's no message

  const getBackgroundColor = () => {
    switch (notification.type) {
      case "success":
        return "bg-green-100 border-green-400 text-green-700";
      case "error":
        return "bg-red-100 border-red-400 text-red-700";
      default:
        return "bg-blue-100 border-blue-400 text-blue-700"; // Default to info
    }
  };

  return (
    <div
      className={`fixed top-5 right-5 z-50 rounded-md shadow-lg border-l-4 p-4 ${getBackgroundColor()}`}
      role="alert"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {notification.type === "success" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : notification.type === "error" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <></>
          )}
        </div>
        <div className="ml-3">
          {notification.type === "success" ||
            (notification.type === "error" && (
              <p className="font-medium">
                {notification.type === "success"
                  ? "Success"
                  : notification.type === "error"
                  ? "Error"
                  : ""}
              </p>
            ))}
          <p>{notification.message}</p>
        </div>
        <button
          onClick={() => setNotification({ ...notification, isVisible: false })}
          className="ml-auto text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PopupNotification;
