import React, { useEffect } from 'react';
import ProductList from '../../component/ProductList/ProductList';
import { useSearch } from '../../context/SearchContext';

const Home: React.FC = () => {

    const { setSearchTerm } = useSearch();

    useEffect(() => {
        // Limpa o termo de busca ao entrar na Home
        setSearchTerm('');
    }, [setSearchTerm]);

    return (
        <div className="min-h-screen bg-gray-50">
            <ProductList />
        </div>
    );
};

export default Home;