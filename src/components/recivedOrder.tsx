import { Show, createSignal } from "solid-js";
import style from "./reciveOrder.module.css";
import {
  FaSolidTemperatureArrowDown,
  FaSolidTemperatureArrowUp,
} from "solid-icons/fa";

export default function RecivedOrder() {
  const [timeCounterHue, setTimeCounterHue] = createSignal(0);
  //set order time to 10:40 next day
  const orderTime = new Date();
  orderTime.setHours(10, 25, 0, 0);

  const morning = new Date();
  morning.setHours(10, 5, 0, 0);

  const [timeleft, _setTimeleft] = createSignal(
    (orderTime.getTime() - morning.getTime()) / 60000
  );
  console.log(timeleft());

  const maxHue = 144;
  const timeleftMax = 60;
  if (timeleft() <= 60 && timeleft() > 0)
    setTimeCounterHue((maxHue / timeleftMax) * timeleft());
  else setTimeCounterHue(200);

  return (
    <div
      class={style.recivedOrder}
      style={{ "--timeHue": timeCounterHue().toString() }}
    >
      <h2>Boby DroptablesInnit</h2>
      <p>69420</p>
      <span class={style.time}>
        {orderTime.getHours()}:{orderTime.getMinutes()} - 10:40
      </span>

      <ol>
        <li>
          <p>product name</p>
          <Show
            when={true}
            fallback={<FaSolidTemperatureArrowDown class={style.cold} />}
          >
            <FaSolidTemperatureArrowUp class={style.hot} />
          </Show>
        </li>
        <li>
          <p>product name</p>
          <Show
            when={false}
            fallback={<FaSolidTemperatureArrowDown class={style.cold} />}
          >
            <FaSolidTemperatureArrowUp class={style.hot} />
          </Show>
        </li>
      </ol>
      <span class={style.total}>total price</span>
      <span class={style.payment}>type of payment</span>
    </div>
  );
}
