/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

const root = document.getElementById("root");

const vh = window.innerHeight;
const vw = window.innerWidth;
document.documentElement.style.setProperty("--vh", `${Math.round(vh / 3)}px`);
document.documentElement.style.setProperty("--vw", `${Math.round(vw / 3)}px`);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
render(() => <App />, root!);
