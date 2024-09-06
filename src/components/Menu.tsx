import MenuTile from "./small/menuTile";
import style from "./Menu.module.css";
import orderImg from "../assets/Order.png";
import Header from "./Header";
export default function Menu() {
  return (
    <main class={style.menu}>
      <Header />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
      <MenuTile title="Zamawianie" image={orderImg} link="/order" />

      <MenuTile title="Zamawianie" image={orderImg} link="/order" />
    </main>
  );
}
