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

export interface iCard {
    cartItems: iProduct[],
    addItem: (item: iProduct) => void,
    removeItem: (item: iProduct) => void,
    setCartItems: React.Dispatch<React.SetStateAction<iProduct[]>> 
}

export interface iCardTotal {
    itemsPrice: number,
    setCartItems: React.Dispatch<React.SetStateAction<iProduct[]>> 
}

export interface iCartCard {
    element: iProduct,
    addItem: (item: iProduct) => void,
    removeItem: (item: iProduct) => void,
}