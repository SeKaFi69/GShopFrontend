import { Show } from "solid-js";
import { useAppContext } from "../appContext";
import type { Product } from "../appContext";
import style from "./Inventory.module.css";
import orderImg from "../assets/Order.png";
import { handleRemove } from "./Cart";
import { BiRegularPlus, BiRegularMinus } from "solid-icons/bi";
import Tag from "./small/Tag";
export default function Inventory() {
  const appContext = useAppContext()!;
  const testProducts = fetch("/api/stock", {
    method: "POST",
    headers: { Authorization: "R2FtaSB0byBmdXJyYXNHYW1pIHRvIGZ1cnJhc0dURiE=" },
  });
  console.log(testProducts);
  appContext.inventory.setInventory([
    {
      name: "Mleko",
      isHeatable: true,
      price: 2,
      amount: 10,
      tags: ["gazowane"],
    },
    {
      name: "Mleko2",
      price: 2.0,
      amount: 10,
      tags: ["gazowane", "250ml", "spermiszcze"],
    },
    { name: "Mleko3", price: 2, amount: 10 },
    { name: "Mleko4", price: 2, amount: 10 },
    { name: "Mleko5", price: 2, amount: 10 },
    { name: "Mleko6", price: 2, amount: 10 },
    { name: "Mleko7", price: 2, amount: 10 },
    { name: "Mleko8", price: 2, amount: 10 },
    { name: "Mleko9", price: 2, amount: 10 },
    { name: "Mleko10", price: 2, amount: 10 },
  ]);

  function handleAdd(name: string) {
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
  }
  return (
    <ol class={style.inventoryContainer}>
      <Show when={appContext.inventory.inventory()}>
        {appContext.inventory
          .inventory()

          .map((product: Product) => (
            <li>
              <img src={orderImg} alt={product.name} />
              <span class={style.name}>{product.name}</span>
              <span class={style.price}> {product.price.toPrecision(3)}</span>
              <ol class={style.tag}>
                {product.tags?.map((tag) => (
                  <li>
                    <Tag name={tag} />
                  </li>
                ))}
              </ol>
              <div class={style.buttonContainer}>
                <Show
                  when={appContext.cart
                    .cart()
                    .filter((cartProduct) => cartProduct.name === product.name)
                    .find((cartProduct) => (cartProduct.amount ?? 0) > 0)}
                >
                  <button
                    type="button"
                    title="Usuń"
                    onClick={() => handleRemove(appContext, product.name)}
                  >
                    <BiRegularMinus />
                  </button>
                </Show>
                <button
                  type="button"
                  title="Dodaj"
                  onclick={handleAdd(product.name)}
                >
                  <BiRegularPlus />
                </button>
              </div>
            </li>
          ))}
      </Show>
    </ol>
  );
}
