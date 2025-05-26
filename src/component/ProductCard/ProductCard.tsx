import React from 'react';
import { type Product } from "../../interface/Product";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const navigate = useNavigate();
    const { addToCart } = useCart();

    // Função para navegar para os detalhes
    const handleViewDetails = () => {
        navigate(`/product/${product.id}`);
    };

    // Função para adicionar ao carrinho
    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation(); // Impede que o clique propague e navegue para detalhes
        addToCart(product);
        toast.success(`${product.name} adicionado ao carrinho!`);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group overflow-hidden" onClick={handleViewDetails}>
            <div className="p-4 flex-grow">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-t-lg mb-4 cursor-pointer group-hover:scale-105 transition-transform duration-300"
                />
                <h2 className="text-base font-medium text-gray-800 mb-2 h-12 line-clamp-2 cursor-pointer hover:text-blue-600"
                >
                    {product.name}
                </h2>
                <p className="text-xl font-bold text-gray-900 mb-4">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
            </div>
            <div className="p-4 border-t border-gray-100">
                <button
                    onClick={handleAddToCart}
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