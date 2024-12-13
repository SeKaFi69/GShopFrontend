import style from "./tag.module.css";
export type TagType = {
  id?: bigint;
  name?: string;
  tag_group_id?: bigint;
  disabled?: boolean;
  onClick?: () => void;
};
export default function Tag(props: TagType) {
  return (
    <>
      <button
        type="button"
        onClick={props.onClick}
        class={style.tag}
        classList={{
          [style.disabled]: props.disabled,
        }}
      >
        {props.name}
      </button>
    </>
  );
}
