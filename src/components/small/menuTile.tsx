import { A } from "@solidjs/router";
import style from "../Menu.module.css";
export default function MenuTile(props: {
  title: string;
  image: string;
  link: string;
}) {
  return (
    <A href={props.link} class={style.menuTile}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
    </A>
  );
}
