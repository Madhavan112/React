import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import c from "./styles.module.css";
export default function ImageSlider({ url, limit, page }) {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [errormsg, setErrormsg] = useState(null);
  const [img,setImg]=useState(0)
  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (err) {
      setErrormsg(err.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);
  if (loading) {
    return (
      <>
        <p>Oops it is Loading</p>
      </>
    );
  }
  if (errormsg) {
    return (
      <>
        <p>Oops it is {errormsg}</p>
      </>
    );
  }
  return (
    <div className={c.wrapper}>
      <div className={c.container}>
        <BsArrowLeftCircle onClick={()=>{ img===0 ? setImg(images.length-1) : setImg(img-1) 
      }} className={c.leftIcon} />
          {images.map((image, index) => {
            return (<img  className= {img===index ? c.image : c.disappearimg} key={image.id} src={image.download_url} alt=""  />);
          })}
        <BsArrowRightCircle className={c.rightIcon} onClick={()=>{img===images.length-1 ? setImg(0):setImg(img+1) }} />
        <span className={c.circleIndicator}>
        {images.map((image, index) => {
            return ( <button key={index} className={ index===img ? `${c.circle} ${c.appearbtn}`  : c.circle} onClick={()=>{setImg(index)}} ></button> );
          })}
        </span>
      </div>
    </div>
  );
}
