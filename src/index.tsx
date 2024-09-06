/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { createSignal } from "solid-js";

const root = document.getElementById("root");

const [vh, setVh] = createSignal(window.innerHeight);
const [vw, setVw] = createSignal(window.innerWidth);

while (root) {
  window.addEventListener("resize", () => {
    setVh(window.innerHeight);
    setVw(window.innerWidth);
  });
  break;
}

document.documentElement.style.setProperty("--vh", `${Math.round(vh() / 3)}px`);
document.documentElement.style.setProperty("--vw", `${Math.round(vw() / 3)}px`);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
render(() => <App />, root!);
