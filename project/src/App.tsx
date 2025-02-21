import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import Loader from './components/Loader';

// Import dynamique des pages
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Payment = lazy(() => import('./pages/Payment'));

function App() {
  return (
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/payment" element={<Payment />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
  );
}

export default App;