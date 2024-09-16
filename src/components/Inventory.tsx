import { Show } from "solid-js";
import { useOrderContext } from "../orderContext";
import type { Product } from "../orderContext";
import style from "./Inventory.module.css";
export default function Inventory() {
  const orderContext = useOrderContext();

  orderContext.inventory.setInventory([
    { name: "Mleko", price: 2, amount: 10 },
    { name: "Chleb", price: 1, amount: 5 },
    { name: "Masło", price: 3, amount: 3 },
  ]);

  const handleAdd = (name: string) => {
    return () => {
      if (
        orderContext.cart
          .cart()
          .some((product: Product) => product.name === name)
      ) {
        orderContext.cart.setCart(
          orderContext.cart
            .cart()
            .map((product: Product) =>
              product.name === name
                ? { ...product, amount: product.amount! + 1 }
                : product
            )
        );
      } else {
        const product = orderContext.inventory
          .inventory()
          .find((product: Product) => product.name === name);
        if (product) {
          orderContext.cart.setCart([
            ...orderContext.cart.cart(),
            { ...product, amount: 1 },
          ]);
        }
      }
    };
  };
  return (
    <ol class={style.inventoryContainer}>
      <h2>Inwentarz</h2>
      <input type="text" placeholder="Wyszukaj produkt" />
      <Show when={orderContext.inventory.inventory()}>
        {orderContext.inventory.inventory().map((product: Product) => (
          <li>
            <img src="" alt="" />
            <span class={style.name}>{product.name} </span>
            <span class={style.price}> {product.price} zł</span>
            <button
              type="button"
              title="Dodaj"
              onclick={handleAdd(product.name)}
            >
              +
            </button>
          </li>
        ))}
      </Show>
    </ol>
  );
}
