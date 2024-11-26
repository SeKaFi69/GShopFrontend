import style from "./Settings.module.css";

export default function Settings() {
  return (
    <main class={style.main}>
      <h1>Settings</h1>

      <input type="color" title="wybierz kolor" />
    </main>
  );
}
