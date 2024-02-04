import { useEffect, useState } from "react";
import c from "./styles.module.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [err, setErr] = useState(null);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          cnt === 0 ? 0 : 20 * cnt
        }`
      );
      const product = await response.json();
      setData((prevData) => [...prevData, ...product.products]);
      setLoading(false);
    } catch (e) {
      setErr(e.message);
      setLoading(false);
    }
  }
  function handleClick() {
    setCnt(cnt + 1);
  }
  function buttonDisabled() {
    if (cnt === 5) {
      setButtonDisabled(true);
    }
  }
  useEffect(() => {
    fetchData();
    buttonDisabled();
  }, [cnt]);
  if (loading) {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Oops Items are loading</h1>
      </>
    );
  }
  if (err){
    console.log(err)
  }
  return (
    <div className={c.container}>
      <div className={c.items}>
        {data.map((p, index) => {
          return (
            <div className={c.item} key={index}>
              <img src={p.thumbnail} alt="" />
              <p>{p.title}</p>
            </div>
          );
        })}
      </div>
      <div className={c.load}>
        <button
          onClick={() => {
            handleClick();
          }}
          disabled={isButtonDisabled}
        >
          Load More Btn
        </button>
        {isButtonDisabled && <p>You have reached limit</p>}
      </div>
    </div>
  );
}
