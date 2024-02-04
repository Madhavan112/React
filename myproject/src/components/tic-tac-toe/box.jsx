import c from "./style.module.css";
export default function Box({handleBoxClick,resultChecker,bnt}) {
  return resultChecker.map((_, i) => <button key={i} onClick={()=>{handleBoxClick(i)}} className={c.item} disabled={bnt ? true : false} >{_}</button>);
}
