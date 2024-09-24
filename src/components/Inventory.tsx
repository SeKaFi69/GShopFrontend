import { Show } from "solid-js";
import { useAppContext } from "../appContext";
import type { Product } from "../appContext";
import style from "./Inventory.module.css";
import orderImg from "../assets/Order.png";
import { handleRemove } from "./Cart";
import { BiRegularPlus, BiRegularMinus } from "solid-icons/bi";
export default function Inventory() {
  const appContext = useAppContext()!;

  appContext.inventory.setInventory([
    { name: "Mleko", isHeatable: true, price: 2, amount: 10 },
    { name: "Mleko2", price: 2.0, amount: 10 },
    { name: "Mleko3", price: 2, amount: 10 },
    { name: "Mleko4", price: 2, amount: 10 },
    { name: "Mleko5", price: 2, amount: 10 },
    { name: "Mleko6", price: 2, amount: 10 },
    { name: "Mleko7", price: 2, amount: 10 },
    { name: "Mleko8", price: 2, amount: 10 },
    { name: "Mleko9", price: 2, amount: 10 },
    { name: "Mleko10", price: 2, amount: 10 },

    { name: "Chleb", price: 3, amount: 10 },
    { name: "Chleb2", price: 3, amount: 10 },
    { name: "Chleb3", price: 3, amount: 10 },
    { name: "Chleb4", price: 3, amount: 10 },
    { name: "Chleb5", price: 3, amount: 10 },
    { name: "Chleb6", price: 3, amount: 10 },
    { name: "Chleb7", price: 3, amount: 10 },
    { name: "Chleb8", price: 3, amount: 10 },
    { name: "Chleb9", price: 3, amount: 10 },
    { name: "Chleb10", price: 3, amount: 10 },

    { name: "Jabłko", price: 1, amount: 10 },
    { name: "Jabłko2", price: 1, amount: 10 },
    { name: "Jabłko3", price: 1, amount: 10 },
    { name: "Jabłko4", price: 1, amount: 10 },
    { name: "Jabłko5", price: 1, amount: 10 },
    { name: "Jabłko6", price: 1, amount: 10 },
    { name: "Jabłko7", price: 1, amount: 10 },
    { name: "Jabłko8", price: 1, amount: 10 },
    { name: "Jabłko9", price: 1, amount: 10 },
    { name: "Jabłko10", price: 1, amount: 10 },

    { name: "Pomidor", price: 2, amount: 10 },
    { name: "Pomidor2", price: 2, amount: 10 },
    { name: "Pomidor3", price: 2, amount: 10 },
    { name: "Pomidor4", price: 2, amount: 10 },
    { name: "Pomidor5", price: 2, amount: 10 },
    { name: "Pomidor6", price: 2, amount: 10 },
    { name: "Pomidor7", price: 2, amount: 10 },
    { name: "Pomidor8", price: 2, amount: 10 },
    { name: "Pomidor9", price: 2, amount: 10 },
    { name: "Pomidor10", price: 2, amount: 10 },
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
        {appContext.inventory.inventory().map((product: Product) => (
          <li>
            <img src={orderImg} alt={product.name} />

            <span class={style.name}>{product.name}</span>
            <span class={style.price}> {product.price.toPrecision(3)}</span>
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
