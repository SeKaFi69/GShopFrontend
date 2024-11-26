import { A } from "@solidjs/router";
import style from "./Home.module.css";

export default function AdminPanel() {
  return (
    <main class={style.main}>
      <A href={"/adminPanel"}>Admin Panel</A>
      <A href={"/order"}>Zamów</A>
      <A href={"/login"}>Login</A>
      <A href={"/adminPanel/addProduct"}>Dodaj produkt</A>
    </main>
  );
}
