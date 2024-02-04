// import { useEffect } from "react";

import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
  // useEffect(() => {
    function listener(e) {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    }
    // document.addEventListener("mouseover", listener);
    // document.addEventListener("click", listener);
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", listener);
    }, 0);

    return () => {
      // document.removeEventListener("mouseover", listener);
      clearTimeout(timeoutId);
      document.removeEventListener("click", listener);
    };
  // },[ref,handler])
}
