import c from "./style.module.css";
import { IoIosCloseCircle } from "react-icons/io";
export default function PopUp({ pop, setPop }) {
  return (
    <div className={c.container}>
      <div className={c.wrapper}>
        <div className={`${c.item} ${c.header}`}>
          <h1>Header</h1>
          <IoIosCloseCircle size={30}
            onClick={() => {
              setPop(!pop);
            }}
          />
        </div>
        <div className={`${c.item} ${c.content}`} >
          <h1>Content</h1>
        </div>
        <div className={`${c.item} ${c.footer}`}>
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  );
}
