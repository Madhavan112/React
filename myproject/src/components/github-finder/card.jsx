import c from "./style.module.css";

export default function Card({ Detail }) {
  return (
    <div className={c.container}>
      <div className={c.header}>
        <img src={Detail.avatar_url} alt="" />
        <p>{Detail.name || Detail.login}</p>
      </div>
      <div className={c.content}>
        <p>Followers : {Detail.followers}</p>
        <p>Following : {Detail.following}</p>
      </div>
      <a style={{textDecoration:"none",fontSize:"20px",margin:"0 auto",color:"black",padding:"10px"}}target="blank" href={`https://github.com/${Detail.login}`}>
        Profile Link
      </a>
    </div>
  );
}
