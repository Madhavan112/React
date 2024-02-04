import MenuItem from "./Menu-item";
import c from "./style.module.css";
export default function MenuList({ list }) {
  return (
    <ul className={c.list}>{list.length > 0 && list.map((item) => <MenuItem  item={item} />)}</ul>
  );
}
