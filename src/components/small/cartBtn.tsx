import { Show } from "solid-js";
import { useAppContext } from "../../appContext";
import style from "../../routes/Order.module.css";
import { RiFinanceShoppingBasketLine } from "solid-icons/ri";

export default function CartBtn() {
  const appContext = useAppContext()!;

  return (
    <button
      class={
        appContext.cart.itemCount() === 0 ? style.cartBtn : style.cartBtnActive
      }
      type="button"
      onClick={() => {
        appContext.cart.setShowCart(!appContext.cart.showCart());
      }}
    >
      <RiFinanceShoppingBasketLine />
      <Show when={appContext.cart.itemCount() !== 0}>
        <p class={style.itemCount}>{appContext.cart.itemCount()}</p>
      </Show>
    </button>
  );
}
