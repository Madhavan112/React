import { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code";
import c from "./style.module.css";
export default function Qrcode() {
  const [inputText, setInputText] = useState("");
  const [qrValue, setQrValue] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    setInputText("");
    console.log(inputText);
    inputRef.current.focus();
  }, [qrValue]);
  return (
    <div className={c.container}>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a value"
        value={inputText}
      />
      <button
        disabled={inputText && inputText.trim() !== "" ? false : true}
        onClick={() => setQrValue(inputText)}
      >
        Generate
      </button>
      <QRCode value={qrValue} size={50} />
    </div>
  );
}
