import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { iProduct } from "./interfaces";
import { api, iAxiosError, iAxiosResponse } from "./services/api";
import StyledApp from "./styles/StyledApp";

const App = () => {

  const [userInput, setUserInput] = useState<string>("")
  const [products, setProducts] = useState<iProduct[]>([])
  const [cartItems, setCartItems] = useState<iProduct[]>([])

  const addItem = (item: iProduct) => {
    const find = cartItems.find(element => element.id === item.id)

    if (find) {
      setCartItems(cartItems.map(element => element.id === item.id ? {...find, quantity: find.quantity+1} : element))
    } else {
      setCartItems([...cartItems, {...item, quantity: 1}])
    }
  }

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data }: iAxiosResponse<iProduct> = await api.get('/products')
        setProducts(data)
      } catch (error) {
        console.error(error)
      }
    }
    loadProducts()
  })

  return (
    <StyledApp>
      <div className='header'>
          <Header setUserInput={setUserInput} />

          <ProductsList addItem={addItem} products={products} userInput={userInput}/>
        </div>
      
    </StyledApp>
  );
}

export default App