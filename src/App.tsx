import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
              fontSize: '15px',
              padding: '16px',
            },

            // Opções específicas para toasts de sucesso
            success: {
              duration: 2500,
              iconTheme: {
                primary: '#fff',
                secondary: 'rgba(16, 185, 129, 0.9)',
              },
              style: {
                background: 'rgba(16, 185, 129, 0.9)',
                color: '#fff',
              },
            },

            error: {
              style: {
                background: 'rgba(239, 68, 68, 0.9)',
                color: '#fff',
              }
            }
          }}
        />

        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gray-50 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
