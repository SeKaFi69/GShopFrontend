import { Show } from "solid-js";
import { useAppContext } from "../appContext";
import type { Product } from "../appContext";
import style from "./Inventory.module.css";
export default function Inventory() {
  const appContext = useAppContext()!;

  appContext.inventory.setInventory([
    { name: "Mleko", price: 2, amount: 10 },
    { name: "Chleb", price: 1, amount: 5 },
    { name: "Masło", price: 3, amount: 3 },
    { name: "Mleko2", price: 2, amount: 10 },
    { name: "Chleb2", price: 1, amount: 5 },
    { name: "Masło2", price: 3, amount: 3 },
    { name: "Mleko3", price: 2, amount: 10 },
    { name: "Chleb3", price: 1, amount: 5 },
    { name: "Masło3", price: 3, amount: 3 },
    { name: "Mleko4", price: 2, amount: 10 },
    { name: "Chleb4", price: 1, amount: 5 },
    { name: "Masło4", price: 3, amount: 3 },
    { name: "Mleko", price: 2, amount: 10 },
    { name: "Chleb", price: 1, amount: 5 },
    { name: "Masło", price: 3, amount: 3 },
  ]);

  const handleAdd = (name: string) => {
    return () => {
      appContext.cart.setItemCount(appContext.cart.itemCount() + 1);
      console.log(appContext.cart.itemCount());
      if (
        appContext.cart.cart().some((product: Product) => product.name === name)
      ) {
        appContext.cart.setCart(
          appContext.cart
            .cart()
            .map((product: Product) =>
              product.name === name
                ? { ...product, amount: product.amount! + 1 }
                : product
            )
        );
      } else {
        const product = appContext.inventory
          .inventory()
          .find((product: Product) => product.name === name);
        if (product) {
          appContext.cart.setCart([
            ...appContext.cart.cart(),
            { ...product, amount: 1 },
          ]);
        }
      }
    };
  };
  return (
    <ol class={style.inventoryContainer}>
      <input type="text" placeholder="Wyszukaj produkt" />
      <Show when={appContext.inventory.inventory()}>
        {appContext.inventory.inventory().map((product: Product) => (
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
