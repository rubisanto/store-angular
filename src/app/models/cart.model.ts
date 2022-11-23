export interface Cart {
    items: Array<CartItem>
}


// informations in the cart
export interface CartItem {
    product: string;
    name: string;
    price: number;
    quantity: number;
    id: number;
}