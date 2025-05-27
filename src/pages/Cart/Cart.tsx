import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItemRow from '../../component/CartItemRow/CartItemRow';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();

    const total = getCartTotal();

    return (
        <div className="container mx-auto p-4 sm:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Meu Carrinho</h1>

            {cartItems.length === 0 ? (
                <div className="text-center bg-white p-10 rounded-lg shadow-md">
                    <h2 className="text-xl text-gray-600 mb-4">Seu carrinho está vazio.</h2>
                    <Link
                        to="/"
                        className="bg-blue-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-700 transition"
                    >
                        Ver Produtos
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Lista de Itens */}
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                        <div className="flex font-semibold text-gray-600 border-b pb-3 mb-4 text-sm">
                            <div className="flex-1">PRODUTO</div>
                            <div className="w-32 text-center">QUANTIDADE</div>
                            <div className="w-32 text-right">SUBTOTAL</div>
                            <div className="w-16 text-right"></div> {/* Coluna para remover */}
                        </div>
                        {cartItems.map(item => (
                            <CartItemRow key={item.id} item={item} />
                        ))}
                        <button
                            onClick={clearCart}
                            className="mt-6 text-sm text-red-500 hover:underline"
                        >
                            Limpar Carrinho
                        </button>
                    </div>

                    {/* Resumo do Pedido */}
                    <div className="w-full lg:w-80 bg-white p-6 rounded-lg shadow-md h-fit">
                        <h2 className="text-xl font-bold border-b pb-3 mb-6">Resumo do Pedido</h2>
                        <div className="flex justify-between mb-4">
                            <span>Subtotal</span>
                            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <div className="flex justify-between mb-6">
                            <span>Frete</span>
                            <span className="text-green-600 font-semibold">GRÁTIS</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold border-t pt-4 mb-8">
                            <span>TOTAL</span>
                            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <button
                            onClick={() => alert('Função "Finalizar Compra" ainda não implementada!')}
                            className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-green-600 transition shadow-lg"
                        >
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;