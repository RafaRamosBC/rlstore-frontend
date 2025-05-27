import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const CheckoutSuccess: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mx-auto p-8 text-center flex justify-center items-center" style={{ minHeight: 'calc(100vh - 250px)' }}>
            <div className="bg-white p-8 md:p-16 rounded-2xl shadow-2xl max-w-2xl">
                <CheckCircleIcon className="h-24 w-24 text-green-500 mx-auto mb-6 animate-pulse" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compra Realizada com Sucesso!</h1>
                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                    Obrigado por comprar na RL Store! Seu pedido foi recebido e está sendo processado 😊
                </p>
                <Link
                    to="/"
                    className="inline-block bg-blue-600 text-white py-3 px-10 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
                >
                    Voltar para a loja
                </Link>
            </div>
        </div>
    );
};

export default CheckoutSuccess;