import { For, onMount } from "solid-js";

import { fromBinary } from "@bufbuild/protobuf";
import Tag from "./small/Tag";
import { GetTagsResponseSchema } from "../proto/proto/tags/routes_pb";
import type { ProductTag } from "../proto/proto/tags/productTag_pb";

import style from "./TagList.module.css";
import { createStore, produce } from "solid-js/store";

export default function TagList() {
  const [tags, setTags] = createStore<{ tag: ProductTag; disabled: boolean }[]>(
    []
  );
  onMount(() => {
    fetch("/api/tags", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.arrayBuffer();
      })
      .then((data) => {
        const a = fromBinary(GetTagsResponseSchema, new Uint8Array(data));
        setTags(
          a.tags.map((e) => ({
            tag: e,
            disabled: true,
          }))
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  return (
    <label class={style.tagList}>
      <p>Tagi</p>
      <For each={tags}>
        {(e, i) => (
          <Tag
            id={e.tag.id}
            name={e.tag.name}
            tag_group_id={e.tag.tagGroupId}
            disabled={e.disabled}
            onClick={() => {
              setTags(
                i(),
                produce((p) => {
                  p.disabled = !p.disabled;
                })
              );
            }}
          />
        )}
      </For>
    </label>
  );
}
