import { iProductsListCard } from "../../../interfaces";
import StyledButton from "../../../styles/StyledButton";
import StyledCard from "./style";

const Card = ({ element, addItem }: iProductsListCard) => {
  return (
    <StyledCard key={element.id} id={element.id}>
      <figure>
        <img src={element.img} alt="Imagem do produto" />
      </figure>

      <div>
        <h2>{element.name}</h2>
        <h3>{element.category}</h3>

        <span>R$ {element.price.toFixed(2)}</span>

        <StyledButton width="120" height="45" onClick={() => addItem(element)}>
          Adicionar
        </StyledButton>
      </div>
    </StyledCard>
  );
};

export default Card