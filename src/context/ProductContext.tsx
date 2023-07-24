import { productReducer } from "@/reducers/ProductReducer";
import React, { createContext, useReducer } from "react";
import { produce } from "immer";

export const ProductContext = createContext({} as any);

type ProductProviderProps = {
  children: React.ReactNode;
};

const inittialState = {
  products: [],
  isLoading: false,
  error: "",
};

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [state, dispatch] = useReducer(produce(productReducer), inittialState);

  return (
    <div>
      <ProductContext.Provider value={{ state, dispatch }}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;
