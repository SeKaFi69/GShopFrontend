import Inventory from "../components/Inventory";
import style from "./Order.module.css";
import Cart from "../components/Cart";
import OrderDetails from "../components/OrderDetails";
import SearchProduct from "../components/small/searchProduct";
import TagList from "../components/TagList";

export default function Order() {
  // TODO
  return (
    <main class={style.main}>
      <div class={style.panel}>
        <h2>Panel zamawiania</h2>
        <SearchProduct />
        <TagList />
      </div>
      <Inventory />
      <div class={style.finilize}>
        <OrderDetails />
        <Cart />
      </div>
    </main>
  );
}
