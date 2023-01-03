export interface iUserInput {
    setUserInput: React.Dispatch<React.SetStateAction<string>>
}

export interface iProduct {
    id: string,
    name: string,
    category: string,
    price: number,
    img: string,
    quantity?: any
}

export interface iProductsList {
    addItem: (item: iProduct) => void,
    products: iProduct[],
    userInput: string,
}

export interface iProductsListCard {
    element: iProduct,
    addItem: (item: iProduct) => void
}