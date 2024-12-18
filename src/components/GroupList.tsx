import { For, createSignal } from "solid-js";
import style from "./GroupList.module.css";

type GroupType = {
  id: bigint;
  name: string;
};
export function hadleGroup() {
  // todo dodawanie grupy
}

export default function GroupList() {
  const [groups, _setGroups] = createSignal<GroupType[]>([
    { id: BigInt(2253825513621504), name: "Leki" },
    { id: BigInt(415650560354304), name: "Pepsi" },
    { id: BigInt(321379875947399), name: "Zabawki erotyczne Gamiego" },
  ]);

  return (
    <label for="groups" class={style.groupList}>
      <p>Grupy</p>
      <input
        type="text"
        name="groupId"
        list="groups"
        placeholder="Dodaj/Wybierz grupę produktu (opcjonalne)"
      />
      <datalist id="groups" title="Grupy Produktów">
        <For each={groups()}>
          {(e) => <option value={Number(e.id)}>{e.name}</option>}
        </For>
      </datalist>
    </label>
  );
}
