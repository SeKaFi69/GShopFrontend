import Header from "../components/Header";
import Inventory from "../components/Inventory";
import style from "./Order.module.css";
import Cart from "../components/Cart";
import { OrderProvider } from "../orderContext";

export default function Order() {
  return (
    <OrderProvider>
      <main class={style.main}>
        <Header />
        <div class={style.panel}>
          <h2>Panel zamawiania</h2>
        </div>
        <Inventory />
        <Cart />
      </main>
    </OrderProvider>
  );
}
