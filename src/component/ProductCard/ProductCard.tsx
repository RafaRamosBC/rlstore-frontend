import React from 'react';
import { type Product } from "../../interface/Product";
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
    // Adicionaremos a função para adicionar ao carrinho depois
    // onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const navigate = useNavigate();

    // Função para navegar para os detalhes
    const handleViewDetails = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group overflow-hidden">
            <div className="p-4 flex-grow">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-t-lg mb-4 cursor-pointer group-hover:scale-105 transition-transform duration-300"
                    onClick={handleViewDetails}
                />
                <h2 className="text-base font-medium text-gray-800 mb-2 h-12 line-clamp-2 cursor-pointer hover:text-blue-600"
                    onClick={handleViewDetails}
                >
                    {product.name}
                </h2>
                <p className="text-xl font-bold text-gray-900 mb-4">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
            </div>
            <div className="p-4 border-t border-gray-100">
                <button
                    // onClick={() => onAddToCart(product)} // Descomentaremos depois
                    className="w-full bg-green-500 text-white py-2.5 px-4 rounded-md font-semibold hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                    Adicionar ao Carrinho
                </button>
                <button
                    onClick={handleViewDetails}
                    className="w-full mt-2 bg-gray-100 text-gray-700 py-2.5 px-4 rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                    Ver Detalhes
                </button>
            </div>
        </div>
    );
};

export default ProductCard;