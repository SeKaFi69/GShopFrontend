import MenuTile from "./small/menuTile";
import style from "./Menu.module.css";
import orderImg from "../assets/Order.png";
export default function Menu() {
  return (
    <main class={style.menu}>
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
    </main>
  );
}
