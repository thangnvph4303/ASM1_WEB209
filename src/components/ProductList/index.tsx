import { instance } from "@/axios/config";
import { ProductContext } from "@/context/ProductContext";
import React, { useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Button from "../Button";

const ProductList = () => {
  const { state, dispatch } = useContext(ProductContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await instance.get(`/products`);
        dispatch({ type: "FETCH_PRODUCT", payload: data });
      } catch (error: any) {
      } finally {
      }
    };
    fetchProduct();
  }, []);

  const addProduct = async (product: any) => {
    try {
      const data = await instance.post(`/products`, product);
      dispatch({ type: "ADD_PRODUCT", payload: data });
    } catch (error: any) {
    } finally {
    }
  };

  const removeProduct = async (product: any) => {
    try {
      await instance.delete(`/products/${product.id}`);
      dispatch({ type: "DELETE_PRODUCT", payload: product.id });
    } catch (error: any) {
    } finally {
    }
  };

  const updateProduct = async (product: any) => {
    try {
      const data = await instance.put(`/products/${product.id}`, product);
      dispatch({ type: "UPDATE_PRODUCT", payload: data });
    } catch (error: any) {
    } finally {
    }
  };

  if (state.isLoading) return <Skeleton count={3} height={35} />;
  if (state.error) return <div>{state.error}</div>;
  return (
    <div>
      {state?.products?.map((item: any) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      <Button type="primary" onClick={() => addProduct({ name: "Product C" })}>
        Add Product
      </Button>
      <Button
        type="primary"
        onClick={() => updateProduct({ name: "Product C update", id: 3 })}
      >
        Update Product
      </Button>
      <Button type="danger" onClick={() => removeProduct({ id: 3 })}>
        Delete Product
      </Button>
    </div>
  );
};

export default ProductList;
