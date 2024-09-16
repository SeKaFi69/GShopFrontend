import MenuTile from "./small/menuTile";
import style from "./Menu.module.css";
import orderImg from "../assets/Order.png";
import Header from "./Header";
export default function Menu() {
  return (
    <>
      <Header />
      <main class={style.menu}>
        <MenuTile title="Zamów na teraz" image={orderImg} link="/order" />
        <MenuTile title="Zamów na przerwe" image={orderImg} link="/order" />
        <MenuTile title="Zamów na przerwe" image={orderImg} link="/order" />
      </main>
    </>
  );
}
