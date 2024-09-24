import Inventory from "../components/Inventory";
import style from "./Order.module.css";
import Cart from "../components/Cart";
import CartBtn from "../components/small/cartBtn";
import OrderDetails from "../components/OrderDetails";
import SearchProduct from "../components/small/searchProduct";
import Tag from "../components/small/tag";

export default function Order() {
  // TODO
  return (
    <main class={style.main}>
      <div class={style.panel}>
        <h2>Panel zamawiania</h2>
        <CartBtn />
        <SearchProduct />
        <div class={style.tagContainer}>
          <Tag />
        </div>
      </div>
      <Inventory />
      <div class={style.finilize}>
        <OrderDetails />
        <Cart />
      </div>
    </main>
  );
}
