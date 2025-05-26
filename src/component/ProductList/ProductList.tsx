import React from 'react';
import { mockProducts } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import { type Product } from "../../interface/Product";

const ProductList: React.FC = () => {
    const products = mockProducts; // Usando os dados mockados

    // Função para adicionar ao carrinho (será implementada depois)
    // const handleAddToCart = (product: Product) => {
    //   console.log('Adicionando ao carrinho:', product.name);
    // };

    return (
        // Ajuste no padding e margens
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Destaques para você</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"> {/* Aumentei o número de colunas */}
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    // onAddToCart={handleAddToCart} // Passaremos a função depois
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;