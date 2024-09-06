import { A } from "@solidjs/router";
import style from "./AdminPanel.module.css";

export default function AdminPanel() {
  return (
    <main class={style.main}>
      <A href={"/"}>Admin Panel</A>
      <A href={"/menu"}>Menu</A>
      <A href={"/login"}>Login</A>
    </main>
  );
}
