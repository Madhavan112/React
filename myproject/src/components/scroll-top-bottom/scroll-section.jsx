import { useRef } from "react";

export default function ScrollSection() {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];
  function ScrollSection() {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <button
        onClick={() => {
          ScrollSection();
        }}
      >
        Scroll Section
      </button>
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <div ref={index === 4 ? ref : null} style={item.style}>
              {item.label}
            </div>
          );
        })}
    </div>
  );
}
