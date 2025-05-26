import React from 'react';
import { type Product } from "../../interface/Product";

interface ProductCardProps {
    product: Product;
    // Adicionaremos a função para adicionar ao carrinho depois
    // onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="p-4 flex-grow">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-t-lg mb-4 cursor-pointer" // object-contain é mais comum para e-commerce
                />
                <h2 className="text-base font-medium text-gray-800 mb-2 h-12_ line-clamp-2 cursor-pointer">
                    {product.name}
                </h2>
                {/* <p className="text-sm text-gray-600 mb-3 h-10 line-clamp-2">{product.description}</p> */}
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
                    // onClick={() => navigate(`/product/${product.id}`)} // Adicionaremos a navegação depois
                    className="w-full mt-2 bg-gray-100 text-gray-700 py-2.5 px-4 rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                    Ver Detalhes
                </button>
            </div>
        </div>
    );
};

export default ProductCard;