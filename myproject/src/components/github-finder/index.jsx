import { useEffect, useState } from "react";
import Card from "./card";
import c from "./style.module.css";

export default function GitHubFinder() {
  const [inputData, setInputData] = useState("Madhavan112");
  const [gdata, setGdata] = useState({});
  async function fetchData() {
    try {
      const response = await fetch(`https://api.github.com/users/${inputData}`);
      const data = await response.json();
      if (data) {
        setGdata(data);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(gdata);
  return (
    <div className={c.title}>
      <input
        type="text"
        placeholder="Enter github username"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={() => fetchData()}>Click</button>
      <Card Detail={gdata} />
    </div>
  );
}
