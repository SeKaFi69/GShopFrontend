import style from "./Header.module.css";
import CartBtn from "./small/cartBtn";
import UnRollList from "./UnRollList";

export default function Header() {
  return (
    <header class={style.header}>
      <h1>
        <span class={style.g}>G</span>
        <span class={style.s}>Shop</span>
      </h1>
      <CartBtn />
      <UnRollList />
    </header>
  );
}
