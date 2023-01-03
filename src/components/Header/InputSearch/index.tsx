import { iUserInput } from "../../../interfaces";
import StyledSearchBar from "./style";



const InputSearch = ({ setUserInput }: iUserInput) => {
    
    return(
        <StyledSearchBar onSubmit={
            (event) => {
                event.preventDefault()
            }
        }>
            <input type="text" placeholder="Digitar Pesquisa" onChange={event => {setUserInput(event.target.value)}}/>
        </StyledSearchBar>
    )
}

export default InputSearch