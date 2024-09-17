import {
  type Accessor,
  type Setter,
  createContext,
  createSignal,
  useContext,
} from "solid-js";

const appContext = createContext<appContext>();
export type Product = {
  name: string;
  price: number;
  amount?: number;
};

type appContext = {
  inventory: {
    setInventory: Setter<Product[]>;
    inventory: Accessor<Product[]>;
  };
  cart: {
    setCart: Setter<Product[]>;
    cart: Accessor<Product[]>;
    showCart: Accessor<boolean>;
    setShowCart: Setter<boolean>;
    itemCount: Accessor<number>;
    setItemCount: Setter<number>;
  };
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function AppProvider(props: { children: any }) {
  const [inventory, setInventory] = createSignal<Product[]>([]);
  const [cart, setCart] = createSignal<Product[]>([]);
  const [showCart, setShowCart] = createSignal(false);
  const [itemCount, setItemCount] = createSignal(0);

  return (
    <appContext.Provider
      value={{
        inventory: { inventory, setInventory },
        cart: { cart, setCart, showCart, setShowCart, itemCount, setItemCount },
      }}
      {...props}
    />
  );
}

export function useAppContext() {
  return useContext(appContext);
}
