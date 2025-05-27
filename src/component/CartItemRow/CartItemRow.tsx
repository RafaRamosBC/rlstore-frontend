import React from 'react';
import { type CartItem } from '../../interface/CartItem';
import { useCart } from '../../context/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';

interface CartItemRowProps {
    item: CartItem;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (!isNaN(newQuantity)) {
            updateQuantity(item.id, newQuantity);
        }
    };

    const incrementQuantity = () => {
        updateQuantity(item.id, item.quantity + 1);
    };

    const decrementQuantity = () => {
        updateQuantity(item.id, item.quantity - 1);
    };

    return (
        <div className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
            {/* Imagem e Nome */}
            <div className="flex items-center flex-1 pr-4">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-contain mr-4 rounded border" />
                <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                        Preço Unitário: R$ {item.price.toFixed(2).replace('.', ',')}
                    </p>
                </div>
            </div>

            {/* Quantidade */}
            <div className="flex items-center justify-center w-32">
                <button onClick={decrementQuantity} className="px-3 py-1 border rounded-l hover:bg-gray-100">-</button>
                <input
                    type="number"
                    value={item.quantity}
                    onChange={handleQuantityChange}
                    className="w-12 text-center border-t border-b p-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    min="1"
                />
                <button onClick={incrementQuantity} className="px-3 py-1 border rounded-r hover:bg-gray-100">+</button>
            </div>

            {/* Subtotal */}
            <div className="w-32 text-right font-semibold">
                R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
            </div>

            {/* Remover */}
            <div className="w-16 text-right pl-4">
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                    title="Remover Item"
                >
                    <TrashIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default CartItemRow;