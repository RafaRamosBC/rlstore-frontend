import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { type Product } from '../../interface/Product';
import { mockProducts } from '../../data/products';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ProductCard from '../../component/ProductCard/ProductCard';
import { useCart } from '../../context/CartContext'
import toast from 'react-hot-toast';

const ProductDetails: React.FC = () => {
    // Pega o 'id' da URL usando o hook useParams
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [recommended, setRecommended] = useState<Product[]>([]);
    const { addToCart } = useCart();

    // Busca o produto nos dados mockados quando o 'id' muda
    useEffect(() => {
        window.scrollTo(0, 0);

        if (id) {
            const currentId = parseInt(id, 10);
            const foundProduct = mockProducts.find(p => p.id === currentId);
            setProduct(foundProduct);

            // Lógica para selecionar produtos recomendados:
            if (foundProduct) {
                const otherProducts = mockProducts
                    .filter(p => p.id !== currentId) // Exclui o produto atual
                    .sort(() => 0.5 - Math.random()) // Embaralha a lista
                    .slice(0, 4); // Pega os primeiros 4 (ajuste o número se quiser)
                setRecommended(otherProducts);
            }
        }
    }, [id]);

    // Se o produto ainda não foi carregado ou não foi encontrado
    if (!product) {
        return (
            <div className="container mx-auto p-8 text-center">
                <h1 className="text-2xl font-bold text-red-600">Produto não encontrado!</h1>
                <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
                    Voltar para a Home
                </Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.name} foi adicionado ao carrinho!`);
    };

    return (
        <div className="container mx-auto p-4 sm:p-8">
            <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 group"
            >
                <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
                Voltar para a lista
            </Link>

            {/* Seção Principal do Produto */}
            <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl flex flex-col lg:flex-row gap-8 lg:gap-16">

                {/* Seção da Imagem */}
                <div className="lg:w-1/2 flex justify-center items-start">
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full max-w-lg h-auto object-contain rounded-lg border border-gray-200 p-4"
                    />
                </div>

                {/* Seção dos Detalhes */}
                <div className="lg:w-1/2 flex flex-col">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{product.name}</h1>
                    <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">{product.description}</p>

                    <div className="mt-auto pt-6">
                        <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                            R$ {product.price.toFixed(2).replace('.', ',')}
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-green-500 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md hover:shadow-lg"
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>

            {/* Seção de Produtos Recomendados */}
            {recommended.length > 0 && (
                <div className="mt-20 pt-10 border-t border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center lg:text-left">
                        Outros produtos que você pode gostar
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {recommended.map((recProduct) => (
                            <ProductCard key={recProduct.id} product={recProduct} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;