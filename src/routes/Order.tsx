import Inventory from "../components/Inventory";
import style from "./Order.module.css";
import Cart from "../components/Cart";
import CartBtn from "../components/small/cartBtn";

export default function Order() {
  // TODO
  return (
    <main class={style.main}>
      <div class={style.panel}>
        <h2>Panel zamawiania</h2>
      </div>
      <Inventory />
      <Cart />
      <CartBtn />
    </main>
  );
}
