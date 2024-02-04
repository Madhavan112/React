import React, { useState } from "react";
import data from "./data";
import "./styles.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [buttonSelect, setButtonSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleAns(id) {
    id === selected ? setSelected(null) : setSelected(id);
  }

  function handleMulAns(id) {
    const exist = [...multiple];
    const ind = exist.indexOf(id);
    ind === -1 ? exist.push(id) : exist.splice(ind, 1);
    setMultiple(exist);
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setButtonSelect(!buttonSelect);
        }}
      >
        Multiple
      </button>

      <div className="Accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={() =>
                  buttonSelect
                    ? handleMulAns(dataItem.id)
                    : handleAns(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="response">
                  <h3>{dataItem.answer}</h3>
                </div>
              ) : (
                selected === dataItem.id && (
                  <div className="response">
                    <h3>{dataItem.answer}</h3>
                  </div>
                )
              )}
            </div>
          ))
        ) : (
          <>
            <p>No Accordian Guys</p>
          </>
        )}
      </div>
    </div>
  );
}
