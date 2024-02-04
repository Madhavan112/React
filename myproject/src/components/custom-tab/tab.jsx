import { useState } from "react";
import c from "./tab.module.css";
export default function Tab({ TabContent }) {
  const [reqIndex, setReqIndex] = useState(0);
  return (
    <div className={c.container}>
      <div className={c.wrapper}>
        {TabContent.length &&
          TabContent.length > 0 &&
          TabContent.map((element, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  reqIndex === index ? "red" : "rgb(102, 255, 0)",
              }}
              className={c.design}
            >
              <h2 onClick={() => setReqIndex(index)}>{element.label}</h2>
            </div>
          ))}
      </div>
      {TabContent[reqIndex].content && <p>{TabContent[reqIndex].content}</p>}
    </div>
  );
}
