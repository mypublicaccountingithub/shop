import React from "react";

import { Button, Drawer, Typography } from "antd";
const { Text } = Typography;

import { useSelector } from "react-redux";

import { CustomIcons } from "../Icons";
import CartProduct from "./cart-product";
import Title from "../filter-bar/title";

function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const [open, setOpen] = React.useState();

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex justify-center items-center"
        icon={<CustomIcons.Cart className="text-[16px] text-primary-main" />}
      />

      <Drawer
        placement="left"
        className="w-[min(320px,100%)] relative"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col w-full h-full relative px-4 gap-3 pb-4 overflow-auto">
          {items.map((product, idx) => (
            <CartProduct key={idx} product={product} />
          ))}

          <Title>Total Price</Title>

          <div className="flex items-center">
            <CustomIcons.Dollar className="text-[14px] font-bold text-primary-main" />

            <Text className="text-[14px] font-bold text-primary-main">
              {totalPrice}
            </Text>
          </div>

          <Button block type="primary" className="shadow-none mt-auto">
            Buy
          </Button>
        </div>
      </Drawer>
    </>
  );
}

export default Cart;
