import { Show } from "solid-js";
import { useOrderContext } from "../orderContext";
import style from "./Cart.module.css";

export default function Cart() {
  const orderContext = useOrderContext();
  const handleRemove = (name: string) => {
    const currentProductIndex = orderContext.cart
      .cart()
      .findIndex((v) => v.name == name);
    if (currentProductIndex == -1) {
      return;
    }
    orderContext.cart.setCart((prev) => {
      prev[currentProductIndex].amount! -= 1;
      if (prev[currentProductIndex].amount! <= 0) {
        prev.splice(currentProductIndex, 1);
      }
      return [...prev];
    });
  };
  return (
    <ul class={style.cartContainer}>
      <h2>Koszyk</h2>
      <Show when={orderContext.cart.cart().length > 0}>
        {orderContext.cart.cart().map((product: any) => (
          <li>
            <span>
              {product.name} - {product.price} zł
            </span>
            <span>{product.amount}</span>
            <button
              type="button"
              title="Usuń"
              onClick={() => handleRemove(product.name)}
            >
              Usuń
            </button>
          </li>
        ))}
      </Show>
      <span class={style.total}>Total:</span>
    </ul>
  );
}
