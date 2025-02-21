import React, { useState } from 'react';
import { useCart } from '../components/CartContext';

const Payment = () => {
  const { cart } = useCart();
  const shippingFee = 2000;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construction du message de la commande à partir des articles du panier
    const itemsMessage = cart
        .map(
            (item) =>
                `• ${item.name} (${item.quantity}x) : ${(item.price * item.quantity).toLocaleString()} FCFA`
        )
        .join('\n');

    // Calcul du total de la commande
    const totalItems = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const totalCommande = totalItems + shippingFee;

    // Construction du message pour WhatsApp
    const message = `
🛍️ *Nouvelle Commande - Atelier Glacé*

*Client:*
Nom: ${formData.name}
Téléphone: ${formData.phone}
Email: ${formData.email}

*Adresse de livraison:*
${formData.address}
${formData.city}

*Commande:*
${itemsMessage}

Livraison: ${shippingFee.toLocaleString()} FCFA
*Total:* ${totalCommande.toLocaleString()} FCFA
    `.trim();

    // Encoder le message pour l'URL WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // Rediriger vers WhatsApp sur le numéro de l'entreprise avec le message
    window.location.href = `https://wa.me/2250759812366?text=${encodedMessage}`;
  };

  return (
      <div className="py-12 mt-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Informations de livraison</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 font-thin">
                  Nom complet
                </label>
                <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border p-3 text-base font-thin"
                />
              </div>

              <div>
                <label className="block text-sm font-thin mb-2">
                  Téléphone
                </label>
                <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full border p-3 text-base font-thin"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-thin mb-2">
                  Email
                </label>
                <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border p-3 text-base font-thin"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-thin mb-2">
                  Adresse de livraison
                </label>
                <textarea
                    required
                    value={formData.address}
                    onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                    }
                    className="w-full border p-3 text-base font-thin"
                    rows={3}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-thin mb-2">
                  Ville
                </label>
                <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full border p-3 text-base font-thin"
                />
              </div>
            </div>

            <button
                type="submit"
                className="w-full bg-black text-white text-base font-thin py-4 hover:bg-gray-800 transition-colors"
            >
              Commander via WhatsApp
            </button>
          </form>
        </div>
      </div>
  );
};

export default Payment;