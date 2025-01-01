"use client";
import React, { createContext, useState, useContext } from "react";

const NotificationContext = createContext<{
  message: string | null;
  setMessage: (msg: string | null) => void;
}>({
  message: null,
  setMessage: () => {},
});

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <NotificationContext.Provider value={{ message, setMessage }}>
      {children}
      {message && <Notification message={message} />}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);

const Notification = ({ message }: { message: string }) => {
  return (
    <div className="fixed top-4 right-11 z-50 rounded-md bg-green-500 px-4 py-2 text-white shadow-lg">
      {message}
    </div>
  );
};
