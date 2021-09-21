import React, { useState, useEffect } from 'react'
import CloseButton from '../closeButton'
function ProductListMap(props) {
  useEffect(() => {
    props.checkLoc === 'cart' && (
      <>
        {/* {props.setPriceSum((priceSum) => [
          ...priceSum,
          props.Products.price * props.Products.cartQuantity,
        ])} */}
        {props.priceSumCounter(props.Products, 'add')}
        {props.setItemSum((itemSum) => [...itemSum, 1])}
      </>
    )
  }, [])
  return (
    <>
      {props.checkLoc === 'main' ? (
        <div className="prod-items">
          <div className="prod-img">
            <img src={props.Products.photo} />
          </div>
          <div className="prod-text">
            <div className="prod-title">{props.Products.title}</div>
            <div className="prod-price"> ${props.Products.price}</div>
          </div>

          <div className="numberOfItems">
            <div
              className="from-item-plus"
              onClick={() =>
                props.quantInc(
                  props.Products,
                  props.setProducts,
                  props.checkLoc,
                )
              }
            >
              +
            </div>
            <div className="numberOf">{props.Products.quantity}</div>
            <div
              className="from-item-plus"
              onClick={() =>
                props.quantDec(
                  props.Products,
                  props.setProducts,
                  props.checkLoc,
                )
              }
            >
              -
            </div>
          </div>
          <div
            className="prod-add"
            onClick={() => props.itemAdd(props.Products)}
          >
            Add to basket
          </div>
        </div>
      ) : (
        <>
          <div
            className="deleteButton"
            onClick={() => (
              <>
                {' '}
                {props.deleteFromCart(props.Products)}{' '}
                {props.priceSumCounter(props.Products, 'delete')}{' '}
              </>
            )}
          >
            <CloseButton />
          </div>
          <div className="basket-item-box">
            <div className="basket-photo">
              <img src={props.Products.photo} />
            </div>
            <div className="basket-text">
              <div className="basket-title">{props.Products.title}</div>
              <div className="basket-price">${props.Products.price}</div>
            </div>
            <div className="busket-quan-box">
              <div
                className="basket-plus"
                onClick={() => (
                  <>
                    {props.quantInc(
                      props.Products,
                      props.setProducts,
                      props.checkLoc,
                    )}
                    {props.priceSumCounter(props.Products, 'plus')}
                  </>
                )}
              >
                +
              </div>
              <div className="basket-quantity">
                {props.Products.cartQuantity}
              </div>
              <div
                className="basket-plus"
                onClick={() => (
                  <>
                    {props.quantDec(
                      props.Products,
                      props.setProducts,
                      props.checkLoc,
                    )}
                    {props.priceSumCounter(props.Products, 'minus')}
                  </>
                )}
              >
                -
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ProductListMap
