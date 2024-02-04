import MenuList from "./Menu-list";

import { useState } from "react";

export default function MenuItem({ item }) {
  const [displayItem, setDisplayItem] = useState({});

  function handler(item) {
    setDisplayItem((prev) => {
      return { ...prev, [item.label]: !prev[item.label] };
    });
  }
  console.log(displayItem);
  return (
    <li>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <p>{item.label} </p>
        {item.children && item.children.length && item.children.length > 0 ? (
          <span style={{fontSize:"30px"}}
            onClick={() => {
              handler(item);
            }}
          >
            {displayItem[item.label] ? "-" : "+"}
          </span>
        ) : // it has children
        null}
      </div>
      {item.children &&
      item.children.length &&
      item.children.length > 0 &&
      displayItem[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
