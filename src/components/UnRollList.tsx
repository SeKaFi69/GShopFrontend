import {
  AiOutlineUnorderedList,
  AiOutlineHome,
  AiFillSetting,
  AiOutlineSetting,
} from "solid-icons/ai";
import style from "./UnRollList.module.css";
import { createSignal } from "solid-js";
export default function UnRollList() {
  const [active, setActive] = createSignal(false);
  return (
    <div class={style.unroll}>
      <button
        type="button"
        title="Rozwiń"
        onClick={() => {
          setActive(!active());
        }}
        class={style.unrollBtn}
      >
        <AiOutlineUnorderedList />
      </button>
      <ol class={active() ? style.active : ""}>
        <li>
          <a href="/">
            <AiOutlineHome />
            Strona główna
          </a>
        </li>

        <li>
          <a href="/order">Zamów</a>
        </li>
        <li>
          <a href="/adminPanel">Panel Admina</a>
        </li>
        <li>
          <a href="/login">Logowanie</a>
        </li>
        <li>
          <a href="/adminPanel/addProduct">Dodaj Produkt</a>
        </li>
        <li>
          <a href="/settings">
            <AiOutlineSetting />
            Ustawienia
          </a>
        </li>
      </ol>
    </div>
  );
}
