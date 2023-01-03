import { iCard } from "../../interfaces"
import CartCard from "./CartCard"
import CartTotal from "./CartTotal"
import StyledCart from "./style"

export const Cart = ({ cartItems, addItem, removeItem, setCartItems }: iCard) => {
    
    const itemsPrice = cartItems.reduce((a, b) => a + b.price * b.quantity, 0)
    
    return (
        <StyledCart>
            <div className="title">
                <h2>Carrinho de Compras</h2>
            </div>

            <ul>
                {cartItems.length === 0 && <div> <h3>Sua sacola está vazia</h3> <span>Adicione items</span> </div>} 

                {cartItems.map(element => (
                    <CartCard key={element.id} element={element} addItem={addItem} removeItem={removeItem}></CartCard>
                ))}               
            </ul>

            {cartItems.length !== 0 && <CartTotal itemsPrice={itemsPrice} setCartItems={setCartItems}></CartTotal>}
        </StyledCart>
    )
}