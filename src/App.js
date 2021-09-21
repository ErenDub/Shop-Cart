import './App.css'
import Home from './components/home'

function App() {
  const products = [
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
    {
      id: 5,
      title: 'prod 5',
      photo: '/prod1.png',
      price: 5,
      quantity: 1,
      cartQuantity: 0,
    },
    {
      id: 6,
      title: 'prod 6',
      photo: '/prod2.png',
      price: 10,
      quantity: 1,
      cartQuantity: 0,
    },
    {
      id: 7,
      title: 'prod 7',
      photo: '/prod3.png',
      price: 15,
      quantity: 1,
      cartQuantity: 0,
    },
    {
      id: 8,
      title: 'prod 8',
      photo: '/prod4.png',
      price: 30,
      quantity: 1,
      cartQuantity: 0,
    },
  ]
  return (
    <>
      <Home prod={products} />
    </>
  )
}

export default App
