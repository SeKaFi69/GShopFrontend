import style from "./OrderDetails.module.css";
import { Show } from "solid-js";
import { useAppContext } from "../appContext";

export default function OrderDetails() {
  const appContext = useAppContext()!;
  return (
    <Show when={appContext.cart.showCart()}>
      <div class={style.finilizeContainer}>
        <h1>Szczegóły zamówienia</h1>

        <div>Która przerwa</div>

        <div>Czy podgrzać</div>
        <div>Metoda płatności</div>
      </div>
    </Show>
  );
}
