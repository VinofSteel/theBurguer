import { iProductsList } from "../../interfaces"
import Card from "./Card"
import StyledList from "./style"

export const ProductsList = ({ products, userInput, addItem }: iProductsList) => {
    
    const filteredValue = userInput 
    
    return (
        <StyledList>
            {products.filter(element => {
                if (filteredValue === "") {
                    return element
                } else if (element.name.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").includes(filteredValue) || 
                           element.category.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").includes(filteredValue)) {
                    return element
                }
            })
            .map(element => <Card key={element.id} element={element} addItem={addItem}></Card>)}
        </StyledList>
    )
}