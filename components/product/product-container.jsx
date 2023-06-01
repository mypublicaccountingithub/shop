import React from 'react'

import style from "../../styles/components/product/style.module.scss" 
import Product from './index'

function ProductContainer({
    gridMode,
    products
}) {
  return (
    <div className={`${style["product-container"]} ${ gridMode ? style["product-container-grid"] : style["product-container-list"]}`}>
        {products?.map((product , idx) => (
          <Product
          key={idx}
          product={product}
          grid={gridMode}/>
        ))}
    </div>
  )
}

export default ProductContainer