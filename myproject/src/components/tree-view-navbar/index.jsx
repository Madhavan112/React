import c from "./style.module.css";
import MenuList from "./Menu-list";
import menus from "./data";
export default function TreeView() {

  return (
    <div className={c.container}>
      <MenuList  list={menus} />
     
    </div>
  );
}
