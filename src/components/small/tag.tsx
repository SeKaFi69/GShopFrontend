import { CreateProductRequestSchema } from "../../proto/proto/product/routes_pb";
import style from "./tag.module.css";

export default interface props {}
const fetchTags = create(CreateProductRequestSchema, {
  tags: [],
});
export default function tag(props: props) {
  return (
    <>
      <button type="button" class={style.tag}>
        {props.name}
      </button>
    </>
  );
}
