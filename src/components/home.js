import React, { useState } from 'react'
import ProductList from './productList'
import { Products } from '../data/products'
import Header from './header'
function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'prod 1',
      photo: '/prod1.png',
      price: 5,
      quantity: 1,
      cartQuantity: 0,
    },
    {
      id: 2,
      title: 'prod 2',
      photo: '/prod2.png',
      price: 10,
      quantity: 1,
      cartQuantity: 0,
    },
    {
      id: 3,
      title: 'prod 3',
      photo: '/prod3.png',
      price: 15,
      quantity: 1,
      cartQuantity: 0,
    },
    {
      id: 4,
      title: 'prod 4',
      photo: '/prod4.png',
      price: 30,
      quantity: 1,
      cartQuantity: 0,
    },
  ])

  const [cartArr, setCartArr] = useState([])

  const itemAdd = (product, quan) => {
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
      product.cartQuantity = product.quantity
      setCartArr((cartArr) => [...cartArr, product])
    }
    if (!isExsist) {
      product.cartQuantity = product.quantity
      setCartArr((cartArr) => [...cartArr, product])
    }
    // tmp && setCartArr((cartArr) => [...cartArr, product])
    // setTimeout(() => {
    //   product.quantity = 1
    // }, 1000)
  }
  const quantInc = (prod, setProd, checkLoc) => {
    if (checkLoc === 'main') {
      const newArr = products.map((el) => {
        if (el.id === prod.id) {
          el.quantity++
          return el
        } else {
          return el
        }
      })
      setProd([...newArr])
    } else if (checkLoc === 'cart') {
      const newArr = cartArr.map((el) => {
        if (el.id === prod.id) {
          el.cartQuantity++
          return el
        } else {
          return el
        }
      })
      setProd([...newArr])
    }
  }
  const quantDec = (prod, setProd, checkLoc) => {
    if (checkLoc === 'main') {
      if (prod.quantity > 1) {
        const newArr = products.map((el) => {
          if (el.id === prod.id) {
            el.quantity--
            return el
          } else {
            return el
          }
        })
        setProd([...newArr])
      }
    } else if (checkLoc === 'cart') {
      if (prod.cartQuantity > 1) {
        const newArr = cartArr.map((el) => {
          if (el.id === prod.id) {
            el.cartQuantity--
            return el
          } else {
            return el
          }
        })
        setProd([...newArr])
      }
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
      <button onClick={() => console.log(products)}>Array</button>
    </div>
  )
}

export default Home
