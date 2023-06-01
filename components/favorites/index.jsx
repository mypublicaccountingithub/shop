import { Button, Drawer } from "antd";
import React from "react";
import { CustomIcons } from "../Icons";
import { useSelector } from "react-redux";
import Product from "../product";

function Favorites() {
  const { items } = useSelector((state) => state?.favorites);

  const [open, setOpen] = React.useState();

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex justify-center items-center"
        icon={<CustomIcons.HeartFill className="text-[16px] text-primary-main" />}
      />

      <Drawer
        placement="left"
        className="w-[min(320px,100%)] relative"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col w-full h-full relative px-4 gap-3 pb-4 overflow-auto">
          {items.map((product, idx) => (
            <Product key={idx} product={product} grid />
          ))}
        </div>
      </Drawer>
    </>
  );
}

export default Favorites;
