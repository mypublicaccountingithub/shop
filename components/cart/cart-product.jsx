import React from "react";

import Image from "next/image";

import { Button, Typography } from "antd";
const { Title, Text } = Typography;

import ActionButtons from "../product/action-buttons";
import { CustomIcons } from "../Icons";
import {
  changeCartTotalPrice,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../redux/slices/cart";
import { useDispatch } from "react-redux";

function CartProduct({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-[4/5] bg-secondary-dark/50">
        <Image fill src={product?.alt_image} alt={product?.name} unoptimized />

        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity z-[15] bottom-[50%] right-[50%] translate-y-[50%] translate-x-[50%]">
          <ActionButtons columns product={product} />
        </div>
      </div>

      <Title level={4} className="uppercase text-[12px] my-1 text-primary-main">
        {product.name}
      </Title>

      <div className="flex items-center justify-center gap-2">
        <Button
          onClick={() => {
            dispatch(decreaseItemQuantity(product?.id));
            dispatch(changeCartTotalPrice());
          }}
          className="flex items-center justify-center"
          icon={<CustomIcons.Minus className="text-[14px] text-primary-main" />}
        />

        <Text>{product.quantity}</Text>

        <Button
          onClick={() => {
            dispatch(increaseItemQuantity(product?.id));
            dispatch(changeCartTotalPrice());
          }}
          className="flex items-center justify-center"
          icon={<CustomIcons.Plus className="text-[14px] text-primary-main" />}
        />
      </div>

      <div className="flex items-center justify-center mt-1">
        <CustomIcons.Dollar className="text-[14px] font-bold text-primary-main" />

        <Text className="text-[14px] font-bold text-primary-main">
          {product.total_price}
        </Text>
      </div>
    </div>
  );
}

export default CartProduct;
