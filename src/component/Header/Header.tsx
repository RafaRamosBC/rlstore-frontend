import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'; // Precisaremos instalar @heroicons/react

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">
                    RL Store
                </h1>

                {/* Ícone do Carrinho (adicionaremos a funcionalidade depois) */}
                <button className="relative p-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
                    <ShoppingCartIcon className="h-7 w-7" />
                    {/* Badge de Contagem (adicionaremos depois) */}
                    {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            3
          </span> */}
                </button>
            </div>
        </header>
    );
};

export default Header;