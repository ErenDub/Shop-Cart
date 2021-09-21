import React from 'react'
import ProductListMap from './ProductListMap'
function ProductList(props) {
  return (
    <>
      <div className={props.checkLoc === 'main' ? 'items-box' : '.items-box2'}>
        {props.products.map((e) => (
          <ProductListMap
            Products={e}
            key={e.id}
            itemAdd={props.itemAdd}
            quantInc={props.quantInc}
            quantDec={props.quantDec}
            checkLoc={props.checkLoc}
            setProducts={props.setProducts}
            setPriceSum={props.setPriceSum}
            priceSum={props.priceSum}
            itemSum={props.itemSum}
            setItemSum={props.setItemSum}
            priceSumCounter={props.priceSumCounter}
            deleteFromCart={props.deleteFromCart}
          />
        ))}
      </div>
    </>
  )
}

export default ProductList
