import { useEffect, useState } from "react";
import c from "./style.module.css";
export default function CustomScroll() {
  const [data, setData] = useState([]);
  const [w,setW]=useState(0)
  async function fetchData() {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=90&select=title,price"
      );
      const result = await response.json();
      setData(result.products);
    } catch (err) {
      console.log(err.message);
    }
  }
  function handleScroll(){
    console.log(document.body.scrollTop,document.documentElement.scrollTop,document.documentElement.scrollHeight,document.documentElement.clientHeight);
    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const height= document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setW((howMuchScrolled/height)*100);
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=>{
        window.removeEventListener("scroll",()=>{})
    }

  },[]);
//   console.log(data);
console.log(w);
  return (
    <div>
      <div className={c.header}>
        <h1>Custom Scroll Indicator</h1>
        <div className={c.line}>
            <div className={c.progress} style={{width:`${w}%`}}></div>
        </div>
      </div>
      <div className={c.container}>
        {data.map((product, index) => (
          <p key={index}>{product.title}</p>
        ))}
      </div>
    </div>
  );
}
