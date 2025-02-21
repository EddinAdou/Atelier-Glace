import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    updateCartItemQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateCartItemQuantity: () => {},
});

export const useCart = () => useContext(CartContext);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const itemExist = prevCart.find((cartItem) => cartItem.id === item.id);
            if (itemExist) {
                // Si l'article existe déjà, on augmente la quantité
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            }
            return [...prevCart, item];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateCartItemQuantity = (id: number, quantity: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateCartItemQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};