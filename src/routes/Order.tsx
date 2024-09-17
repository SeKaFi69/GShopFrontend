import Inventory from "../components/Inventory";
import style from "./Order.module.css";
import Cart from "../components/Cart";
import { useAppContext } from "../appContext";
import { Show, createSignal } from "solid-js";

export default function Order() {
  const appContext = useAppContext()!;

  // TODO
  return (
    <main class={style.main}>
      <div class={style.panel}>
        <h2>Panel zamawiania</h2>
      </div>
      <Inventory />
      <Cart />
      <button
        class={
          appContext.cart.itemCount() === 0
            ? style.cartBtn
            : style.cartBtnActive
        }
        type="button"
        onClick={() => {
          appContext.cart.setShowCart(!appContext.cart.showCart());
        }}
      >
        Cart
        <Show when={appContext.cart.itemCount() !== 0}>
          <p class={style.itemCount}>{appContext.cart.itemCount()}</p>
        </Show>
      </button>
    </main>
  );
}
