import style from "./breakPicker.module.css";

export default function BreakPicker() {
  return (
    <select title="breakPicker" class={style.pickerContainer}>
      <option value="1">8:45 - 8:50</option>
      <option value="2">9:35 - 9:40</option>
      <option value="3">10:25 - 10:40</option>
      <option value="4">11:25 - 11:30</option>
      <option value="5">12:15 - 12:20</option>
      <option value="6">13:05 - 13:10</option>
      <option value="7">13:55 - 14:00</option>
      <option value="8">14:45 - 14:50</option>
      <option value="9">15:35 - 15:40</option>
      <option value="10">16:25 - 16:30</option>
      <option value="11">17:15 - 17:20</option>
      <option value="12">18:05 - 18:10</option>
    </select>
  );
}
