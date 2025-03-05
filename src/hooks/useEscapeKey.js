// create react hook useEscapeKey

import { useEffect } from "react";

function useEscapeKey(callback) {
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [callback]);
}

export default useEscapeKey;
