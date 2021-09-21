import React, { useState } from 'react'
import ProductList from './productList'
import Icon from './Icon'

function Header(props) {
  const [basketInput, setBasketInput] = useState(false)
  const [priceSum, setPriceSum] = useState([])
  const [itemSum, setItemSum] = useState([])
  const [priceSumStatic, setPriveSumStatic] = useState()
  const popUpCheck = () => {
    setBasketInput(!basketInput)
    if (basketInput === false) {
      setPriceSum([])
      setItemSum([])
    }
  }
  const priceSumCounter = (Products, option) => {
    if (option === 'add') {
      setPriceSum((priceSum) => [
        ...priceSum,
        Products.price * Products.cartQuantity,
      ])
    } else if (option === 'plus') {
      setPriceSum((priceSum) => [...priceSum, Products.price])
    } else if (option === 'minus') {
      Products.cartQuantity >= 1
        ? setPriceSum((priceSum) => [...priceSum, -Products.price])
        : props.deleteFromCart(Products)
    } else if (option === 'delete') {
      setPriceSum((priceSum) => [
        ...priceSum,
        -(Products.price * Products.cartQuantity),
      ])
      setItemSum((itemSum) => [...itemSum, -1])
    }
  }
  return (
    <>
      <div className="header">
        <div className="busket-container" onClick={() => popUpCheck()}>
          <Icon />
          {props.cartArr.length > 0 && (
            <p className="onCartNum"> {props.cartArr.length} </p>
          )}
        </div>
        {/* <div onClick={console.log(itemSum)}>Array</div> */}
        {basketInput && (
          <div className="basket-items">
            {props.cartArr.length > 0 ? (
              <>
                <div className="basketInnerITemsDIv">
                  <ProductList
                    products={props.cartArr}
                    checkLoc="cart"
                    itemAdd={props.itemAdd}
                    quantInc={props.quantInc}
                    quantDec={props.quantDec}
                    setProducts={props.setCartArr}
                    setPriceSum={setPriceSum}
                    priceSum={priceSum}
                    itemSum={itemSum}
                    setItemSum={setItemSum}
                    priceSumCounter={priceSumCounter}
                    deleteFromCart={props.deleteFromCart}
                  />
                </div>
                <p className="busket-container__sum">
                  ნივთები სულ: {itemSum.reduce((a, b) => a + b, 0)}
                </p>
                <p className="basket-sum">
                  თანხა სულ: ${priceSum.reduce((a, b) => a + b, 0)}
                </p>
              </>
            ) : (
              <p className="busket-container__sum">კალათა ცარიელია</p>
            )}
          </div>
        )}
      </div>
      {basketInput && (
        <div className="black-background" onClick={() => popUpCheck()}></div>
      )}
    </>
  )
}

export default Header
