import { Show } from "solid-js";
import style from "./Login.module.css";
import Header from "../components/Header";

export default function Login() {
  return (
    <main class={style.main}>
      <Header />

      <h1>Logowanie</h1>
      <label for="content">
        <input id="login" type="text" placeholder="Login" />
        <input id="password" type="password" placeholder="Hasło" />
        <Show when={true}>
          <h4 class={style.logInError}>
            Twój login lub hasło sie wykopyrtło z dziecięcego wózka i teraz ma
            guza wielkości pięści dorosłego szympansa.
          </h4>
        </Show>
      </label>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button
        title="login"
        onclick={() => {
          alert("login");
        }}
      >
        Zaloguj
      </button>
    </main>
  );
}
