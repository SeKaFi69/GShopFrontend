import { createSignal } from "solid-js";
import RecivedOrder from "../components/recivedOrder";
import style from "./AdminPanel.module.css";

export default function AdminPanel() {
  const [orderTime, _setOrderTime] = createSignal(
    new Date().toLocaleTimeString()
  );

  console.log(orderTime());
  return (
    <main class={style.adminContainer}>
      <RecivedOrder />
      <RecivedOrder />
      <RecivedOrder />
      <RecivedOrder />
      <RecivedOrder />
      <RecivedOrder />
    </main>
  );
}
