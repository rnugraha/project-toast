import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import { ToastContext } from "../ToastProvider";
import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, variant, id }) {
  const { removeToast } = React.useContext(ToastContext);
  const handleClick = () => {
    removeToast(id);
  };
  return (
    <div className={`${styles.toast} ${styles.notice} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        {React.createElement(ICONS_BY_VARIANT[variant], { size: 24 })}
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={handleClick}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
