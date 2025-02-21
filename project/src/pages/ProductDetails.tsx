import { useEffect, useState } from 'react';
import { useCart } from '../components/CartContext';
import Toast from '../components/Toast';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
  images: string[];
}

const ProductDetails = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const storedProduct = localStorage.getItem('selectedProduct');
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, []);

  if (!product) {
    return (
        <p className="py-12 px-6 text-base font-thin">
          Aucun produit sélectionné. Veuillez retourner à la page shop.
        </p>
    );
  }

  const handleAjoutPanier = () => {
    try {
      // Tentative d'ajout au panier
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.images[0]
      });
      // Message de succès
      setToast({
        message: `L'article "${product.name}" a été ajouté avec succès dans le panier.`,
        type: 'success'
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setToast({
          message: `Échec de l'ajout du produit : ${error.message}`,
          type: 'error'
        });
      } else {
        setToast({
          message: "Échec de l'ajout du produit : erreur inconnue.",
          type: 'error'
        });
      }
    }
  };

  return (
      <div className="py-12 mt-16 px-6 text-base font-thin">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {product.images.map((image, index) => (
                  <img
                      key={index}
                      src={image}
                      alt={`${product.name} - Vue ${index + 1}`}
                      className="w-full"
                  />
              ))}
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-2xl">{product.price.toLocaleString()} FCFA</p>
              <p className="text-gray-600">{product.description}</p>
              <button
                  className="w-full bg-black text-white text-base font-thin py-4 hover:bg-gray-800 transition-colors"
                  onClick={handleAjoutPanier}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
        {/* Affichage du Toast si présent */}
        {toast && (
            <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast(null)}
            />
        )}
      </div>
  );
};

export default ProductDetails;