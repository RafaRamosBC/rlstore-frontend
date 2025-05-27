import React from 'react';
import { mockProducts } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import { useSearch } from '../../context/SearchContext';

const ProductList: React.FC = () => {
    const products = mockProducts;
    const { searchTerm } = useSearch();

    // Filtra os produtos com base no searchTerm
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                {/* Muda o título se houver busca */}
                {searchTerm ? `Resultados para "${searchTerm}"` : "Destaques para você"}
            </h1>

            {/* Verifica se há produtos filtrados */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                // Mostra mensagem se não houver resultados
                <div className="text-center py-20 bg-white p-10 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Ops!</h2>
                    <p className="text-lg text-gray-500">
                        Nenhum produto encontrado para "{searchTerm}". <br />
                        Tente buscar por outro termo.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProductList;