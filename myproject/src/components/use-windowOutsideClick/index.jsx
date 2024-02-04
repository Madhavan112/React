import { useRef, useState } from "react";
import useOutsideClick from "./test";
export default function OutsideClick() {
  const [content, setContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setContent(false));
  return (
      <div ref={ref}>
        {content ? (
          <>
            <h2>Hello World</h2>
            <p>Helloo</p>{" "}
          </>
        )
        : (
          <button
            onClick={() => {
              setContent(true);
            }}
          >
            Click Me
          </button>
        )}
    </div>

  );
}
