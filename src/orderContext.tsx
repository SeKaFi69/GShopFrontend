import {
  type Accessor,
  type Setter,
  createContext,
  createSignal,
  useContext,
} from "solid-js";

const orderContext = createContext<OrderContext>();
export type Product = {
  name: string;
  price: number;
  amount?: number;
};

type OrderContext = {
  inventory: {
    setInventory: Setter<Product[]>;
    inventory: Accessor<Product[]>;
  };
  cart: {
    setCart: Setter<Product[]>;
    cart: Accessor<Product[]>;
  };
};

export function OrderProvider(props: { children: any }) {
  const [inventory, setInventory] = createSignal<any[]>([]);
  const [cart, setCart] = createSignal<any[]>([]);

  return (
    <orderContext.Provider
      value={{
        inventory: { inventory, setInventory },
        cart: { cart, setCart },
      }}
      {...props}
    />
  );
}

export function useOrderContext() {
  return useContext(orderContext);
}
