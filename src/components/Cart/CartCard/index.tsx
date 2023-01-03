import { iCartCard } from "../../../interfaces";
import StyledCartCard from "./style";

const CartCard = ({ element, addItem, removeItem }: iCartCard) => {
  return (
    <StyledCartCard>
      <figure>
        <img src={element.img} alt="Imagem do produto" />
      </figure>

      <div className="text">
        <h3>{element.name}</h3>
        <h4>{element.category}</h4>
      </div>

      <div className="buttons">
        <button className="buttons__add" onClick={() => addItem(element)}>+</button>
        <p>{element.quantity} x R$ {element.price.toFixed(2)}</p>
        <button className="buttons__remove" onClick={() => removeItem(element)}>-</button>
      </div>
    </StyledCartCard>
  )
}

export default CartCard