import {
  FaSolidTemperatureArrowDown,
  FaSolidTemperatureArrowUp,
} from "solid-icons/fa";
import style from "./slider.module.css";

export default function Slider() {
  return (
    <>
      <div class={style.switchContainer}>
        <FaSolidTemperatureArrowUp />

        <input type="checkbox" title="Czy podgrzać?" class={style.switch} />
        <FaSolidTemperatureArrowDown />
      </div>
    </>
  );
}
