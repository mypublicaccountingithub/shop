import { Button } from 'antd'
import React from 'react'
import style from "../../styles/components/product/style.module.scss"
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  changeCartTotalPrice,
  increaseItemQuantity,
} from "../../redux/slices/cart";

function AddToCartButton({ product }) {
  const { items } = useSelector((state) => state?.cart);
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        if (items.some((item) => item?.id === product?.id)) {
          dispatch(increaseItemQuantity(product?.id));
          dispatch(changeCartTotalPrice());
          return;
        }
        dispatch(addCartItem(product));
        dispatch(changeCartTotalPrice());
      }}
      className={style["add-to-cart-button"]}
    >
      {items.some((item) => item?.id === product?.id)
        ? "Add More"
        : "Add to Cart"}
    </Button>
  );
}

export default AddToCartButton