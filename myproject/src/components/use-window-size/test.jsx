import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  function handleResize() {
    setSize(()=>{ return{
      width: window.innerWidth,
      height: window.innerHeight,
    };});
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("reset", handleResize);
    };
  }, []);
  return size;
}
