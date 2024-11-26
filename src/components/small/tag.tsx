import style from "./tag.module.css";

export default function tag() {
  const tags = () => {};
  return (
    <>
      <button type="button" class={style.tag}>
        Tag
      </button>
      <button type="button" disabled class={style.tag}>
        Tag
      </button>
    </>
  );
}
