import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen"> {/* Garante que o footer fique embaixo */}
        <Header />
        <main className="flex-grow"> {/* Faz o conteúdo principal crescer */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Outras rotas virão aqui */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
