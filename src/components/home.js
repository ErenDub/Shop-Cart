import React, { useState } from 'react'
import ProductList from './productList'
import { Products } from '../data/products'
import Header from './header'
function Home(props) {
  const [products, setProducts] = useState([...props.prod])

  const [cartArr, setCartArr] = useState([])
  const itemAddDefault = (product) => {
    product.cartQuantity = product.quantity
    setCartArr((cartArr) => [...cartArr, product])
  }
  const itemAdd = (product) => {
    let isExsist = false
    if (cartArr.length > 0) {
      cartArr.forEach((el) => {
        if (el.id === product.id) {
          isExsist = true
          el.cartQuantity += el.quantity
        }
      })
    } else {
      isExsist = true
      itemAddDefault(product)
    }
    if (!isExsist) {
      itemAddDefault(product)
    }
  }

  const quantIncDefault = (array, setProd, prod, toChange, type) => {
    const newArr = array.map((el) => {
      if (el.id === prod.id) {
        if (toChange === 'main') {
          type === 'inc' ? el.quantity++ : el.quantity--
        } else if ('cart') {
          type === 'inc' ? el.cartQuantity++ : el.cartQuantity--
        }

        return el
      } else {
        return el
      }
    })
    setProd([...newArr])
  }

  const quantInc = (prod, setProd, checkLoc) => {
    if (checkLoc === 'main') {
      quantIncDefault(products, setProd, prod, checkLoc, 'inc')
    } else if (checkLoc === 'cart') {
      quantIncDefault(cartArr, setProd, prod, checkLoc, 'inc')
    }
  }

  const quantDec = (prod, setProd, checkLoc) => {
    if (checkLoc === 'main') {
      prod.quantity > 1 &&
        quantIncDefault(products, setProd, prod, checkLoc, 'dec')
    } else if (checkLoc === 'cart') {
      quantIncDefault(cartArr, setProd, prod, checkLoc, 'dec')
    }
  }
  const deleteFromCart = (prod) => {
    const newArr = cartArr.filter((e) => e.id !== prod.id)
    setCartArr(newArr)
  }
  return (
    <div>
      <Header
        cartArr={cartArr}
        setCartArr={setCartArr}
        itemAdd={itemAdd}
        quantInc={quantInc}
        quantDec={quantDec}
        deleteFromCart={deleteFromCart}
      />
      <ProductList
        products={products}
        itemAdd={itemAdd}
        quantInc={quantInc}
        quantDec={quantDec}
        setProducts={setProducts}
        checkLoc="main"
      />
      {/* <button onClick={() => console.log(products)}>Array</button> */}
    </div>
  )
}

export default Home
