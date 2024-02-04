import { useRef } from "react";
import useFetch from "../use-fetch/test";
export default function ScrollFeature() {
    const ref =useRef(null)
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  function handleToBottom() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  function handleToTop(){
    ref.current.scrollIntoView({behavior: "smooth"})
   
    
  }
  if(error){
    return <p>{error.message}</p>
  }
  if(pending){
    return <p>Loading</p>
  }
  return (
    <div>
        <button onClick={()=>handleToTop()}>Click</button>
      <ul>
        {data && data.products && data.products.length > 0 && data.products.map((element) => <li>{element.title}</li>)}
      </ul>
      <button onClick={() => handleToBottom()}>Bottom</button>
      <div ref={ref}>
        <p>Reached Dead End</p>
      </div>
    </div>
  );
}
