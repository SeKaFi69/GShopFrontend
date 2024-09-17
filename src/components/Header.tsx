import style from "./Header.module.css";

export default function Header() {
  return (
    <header class={style.header}>
      <h1>
        <span class={style.g}>G</span>
        <span class={style.s}>Shop</span>
      </h1>

      <a href="/" class={style.backBtn}>
        Back
      </a>
    </header>
  );
}
