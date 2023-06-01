import React from "react";

import Image from "next/image";

import { Rate, Typography } from "antd";
const { Title, Text } = Typography;

import { CustomIcons } from "../Icons";

import AddToCartButton from "./add-to-cart-button";
import ActionButtons from "./action-buttons";

function Product({ product, grid = false }) {
  return (
    <div
      className={`w-full flex flex-shrink-0 group overflow-hidden ${grid ? "flex-col items-center" : ""
        } items-start gap-2`}
    >
      <div
        className={`${grid ? "w-full" : "w-[200px]"
          } flex-shrink-0 aspect-[4/5] bg-secondary-dark/50 relative`}
      >
        <Image fill src={product?.alt_image} alt="" unoptimized />

        {grid ? (
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity z-[15] bottom-[50%] right-[50%] translate-y-[50%] translate-x-[50%]">
            <ActionButtons columns product={product} />
          </div>
        ) : null}
      </div>

      <div
        className={`flex flex-col overflow-hidden  ${grid ? "items-center" : "items-start"
          }`}
      >
        <Title
          level={4}
          className="uppercase text-[12px] my-1 text-primary-main"
        >
          {product.name}
        </Title>

        {grid ? null : (
          <Text className="text-[12px] text-primary-main/80 mt-1 w-full whitespace-nowrap overflow-hidden text-ellipsis">
            {product.description}
          </Text>
        )}

        <Rate
          disabled
          defaultValue={4.7}
          allowHalf
          className={`text-primary-main text-[12px] flex gap-1 [&>li]:m-0 ${grid ? "" : "mt-3"
            }`}
        />

        {!grid ? null : (
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-1 mt-1 group-hover:hidden py-[5px]">
              <CustomIcons.Dollar className="text-[14px] font-bold text-primary-main" />

              <Text className="text-[14px] font-bold text-primary-main">
                {product.price}
              </Text>
            </div>

            <div className="group-hover:flex hidden mt-1">
              <AddToCartButton product={product} />
            </div>
          </div>
        )}

        {grid ? null : (
          <>
            <div className="flex items-center justify-center gap-1 mt-1">
              <CustomIcons.Dollar className="text-[14px] font-bold text-primary-main" />

              <Text className="text-[14px] font-bold text-primary-main">
                {product.price}
              </Text>
            </div>

            <div className="flex items-center flex-wrap justify-start mt-4 gap-4">
              <AddToCartButton product={product} />

              <ActionButtons product={product} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Product;
