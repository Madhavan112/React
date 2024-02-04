import { useState } from "react";
import PopUp from "./popup";
export default function ModalPopUp() {
  const [pop, setPop] = useState(true);
  return (
    <div style={{width:"100vw", height:"100vh", display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"20px"}}>
        <h2>Modal Pop Up</h2>
      <button
        onClick={() => {
          setPop(!pop);
        }}
      >Click</button>
      {pop && <PopUp pop={pop} setPop={setPop}
      />}
      
    </div>
  );
}
