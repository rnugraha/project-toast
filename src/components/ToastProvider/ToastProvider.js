import * as React from "react";
import ToastShelf from "../ToastShelf";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const addToast = (toast) => {
    setToasts([...toasts, toast]);
  };

  useEscapeKey(() => {
    // empty the toasts array when the escape key is pressed
    setToasts([]);
  });

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
