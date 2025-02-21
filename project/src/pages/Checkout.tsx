import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const Checkout = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
      <div className="py-12 mt-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 ">Panier</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {cart.map((item) => (
                  <div key={item.id} className="flex gap-6 border-b pb-6 items-center">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover"
                    />
                    <div className="flex-grow">
                      <h3 className="font-thin">{item.name}</h3>
                      <p className="text-gray-600 font-thin mt-1">
                        {item.price.toLocaleString()} FCFA
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <label htmlFor={`quantity-${item.id}`} className="text-sm">
                          Quantité:
                        </label>
                        <select
                            id={`quantity-${item.id}`}
                            value={item.quantity}
                            className="border p-1"
                            onChange={(e) =>
                                updateCartItemQuantity(item.id, parseInt(e.target.value))
                            }
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                        title="Retirer du panier"
                    >
                      <Trash2 size={24} />
                    </button>
                  </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 space-y-6">
              <h2 className="text-xl font-bold">Résumé de la commande</h2>
              <div className="space-y-2">
                <div className="flex justify-between font-thin">
                  <span>Sous-total</span>
                  <span>{total.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between font-thin">
                  <span>Livraison</span>
                  <span>2000 FCFA</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>{(total + 2000).toLocaleString()} FCFA</span>
                </div>
              </div>

              <Link
                  to="/payment"
                  className="block w-full bg-black text-white text-center font-thin py-4 hover:bg-gray-800 transition-colors"
              >
                Procéder au paiement
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Checkout;