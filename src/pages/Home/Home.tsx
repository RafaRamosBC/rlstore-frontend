import React from 'react';
import ProductList from '../../component/ProductList/ProductList';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Aqui você pode adicionar um Header/Navbar no futuro */}
            <ProductList />
            {/* Aqui você pode adicionar um Footer no futuro */}
        </div>
    );
};

export default Home;