import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const { getItemCount } = useCart();
    const itemCount = getItemCount();

    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-3xl font-bold text-blue-600 cursor-pointer">
                    RL Store
                </Link>

                {/* Ícone do Carrinho */}
                <Link to="/cart" className="relative p-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
                    <ShoppingCartIcon className="h-7 w-7" />
                    {/* Badge de Contagem */}
                    {itemCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                            {itemCount}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
};

export default Header;