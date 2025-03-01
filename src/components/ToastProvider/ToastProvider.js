import * as React from "react";
import ToastShelf from "../ToastShelf";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const addToast = (toast) => {
    setToasts([...toasts, toast]);
  };
  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      <ToastShelf toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
