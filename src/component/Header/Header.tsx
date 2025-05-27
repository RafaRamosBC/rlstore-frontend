import React from 'react';
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';
import { Link, useLocation } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';

const Header: React.FC = () => {
    const { getItemCount } = useCart();
    const { searchTerm, setSearchTerm } = useSearch();
    const itemCount = getItemCount();
    const location = useLocation();

    // Função para atualizar o termo de busca
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-4">
                {/* Logo */}
                <Link to="/" className="text-2xl md:text-3xl font-bold text-blue-600 cursor-pointer flex-shrink-0">
                    RL Store
                </Link>

                {/* Barra de Pesquisa */}
                {location.pathname === '/' ? ( // <-- SÓ MOSTRA SE ESTIVER NA HOME ('/')
                    <div className="flex-1 min-w-0 px-4">
                        <div className="relative flex items-center w-full max-w-lg mx-auto">
                            <input
                                type="text"
                                placeholder="O que você está procurando?"
                                className="w-full py-2.5 pl-5 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button
                                className="absolute right-0 top-0 bottom-0 my-auto mr-1.5 p-2 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-600 focus:outline-none transition-colors duration-200"
                                aria-label="Buscar"
                            >
                                <MagnifyingGlassIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex-1"></div>
                )}

                {/* Ícone do Carrinho */}
                <Link to="/cart" className="relative p-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none flex-shrink-0">
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