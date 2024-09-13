import { Show, createEffect, createSignal } from "solid-js";
import { useOrderContext } from "../orderContext";
import style from "./Cart.module.css";
import type { Product } from "../orderContext";

export default function Cart() {
  const orderContext = useOrderContext();
  const [total, setTotal] = createSignal(0);
  createEffect(() => {
    const totalTemp = orderContext?.cart
      .cart()
      .reduce(
        (acc: number, product: Product) =>
          acc + product.price * product.amount!,
        0
      );
    setTotal(totalTemp);
  });

  const handleRemove = (name: string) => {
    const currentProductIndex = orderContext?.cart
      .cart()
      .findIndex((v) => v.name === name);
    if (currentProductIndex === -1) {
      return;
    }
    orderContext?.cart.setCart((prev) => {
      prev[currentProductIndex].amount -= 1;
      if (prev[currentProductIndex].amount! <= 0) {
        prev.splice(currentProductIndex, 1);
      }
      return [...prev];
    });
  };
  return (
    <ul class={style.cartContainer}>
      <h2>Koszyk</h2>
      <Show
        when={orderContext.cart.cart().length > 0}
        fallback={"Koszyk jest pusty"}
      >
        {orderContext?.cart.cart().map((product: Product) => (
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
      <Show when={total() !== 0}>
        <span class={style.total}>Total: {total() + "zł"}</span>
        <button type="button">Zamów</button>
      </Show>
    </ul>
  );
}
