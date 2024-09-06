import { A } from "@solidjs/router";
import style from "./AdminPanel.module.css";
import Header from "../components/Header";

export default function AdminPanel() {
  return (
    <main class={style.main}>
      <Header />
      <A href={"/"}>Admin Panel</A>
      <A href={"/menu"}>Menu</A>
      <A href={"/login"}>Login</A>
    </main>
  );
}
