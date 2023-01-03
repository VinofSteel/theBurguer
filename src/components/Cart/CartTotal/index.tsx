import { iCardTotal } from "../../../interfaces"
import StyledTotal from "./style"

const CartTotal = ({ itemsPrice, setCartItems }: iCardTotal) => {
    return (
        <StyledTotal>
            <div>
                <h3>Total</h3>

                <span>R$ {itemsPrice.toFixed(2)}</span>
            </div>

            <button onClick={() => setCartItems([])}>Remover Todos</button>
        </StyledTotal>
    )
}

export default CartTotal