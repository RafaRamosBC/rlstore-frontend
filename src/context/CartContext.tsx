import React, { createContext, useState, useContext, useCallback } from 'react';
import { type ReactNode } from 'react';
import { type Product } from '../interface/Product';
import { type CartItem } from '../interface/CartItem';

// Define o formato do nosso contexto
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
}

// Cria o contexto com um valor padrão (undefined, pois será provido pelo Provider)
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cria o Provedor (Provider) que vai gerenciar o estado
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Se já existe, aumenta a quantidade
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Se não existe, adiciona com quantidade 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
     console.log("Adicionado ao carrinho:", product.name, cartItems); // Para depuração
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        // Se a quantidade for 0 ou menos, remove o item
        return prevItems.filter(item => item.id !== productId);
      } else {
        // Senão, atualiza a quantidade
        return prevItems.map(item =>
          item.id === productId ? { ...item, quantity: quantity } : item
        );
      }
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const getItemCount = useCallback(() => {
      return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  // O valor que será_fornecido para os componentes filhos
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Cria um hook customizado para facilitar o uso do contexto
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};