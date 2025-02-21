import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import ProductCard from '../components/ProductCard';
import { useToast } from '../components/ToastContext';


interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  status?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Lunettes de Soleil Classic',
    price: 25000,
    category: 'lunettes',
    image:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description:
        'Lunettes de soleil élégantes avec protection UV complète. Design intemporel qui convient à tous les visages.',
  },
  {
    id: 2,
    name: 'Lunettes Aviator Premium',
    price: 35000,
    category: 'lunettes',
    image:
        'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description:
        "Découvrez les Lunettes Aviator Premium, alliant style intemporel et performance...",
  },
  {
    id: 3,
    name: 'T-shirt Oversize',
    price: 15000,
    category: 'vetements',
    image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description:
        "Ce T-shirt Oversize, confectionné dans un coton doux et respirant, vous offre un confort inégalé...",
  },
  {
    id: 4,
    name: 'Sneakers Urban',
    price: 45000,
    category: 'chaussures',
    image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description:
        "Les Sneakers Urban se distinguent par leur design contemporain et leur confort absolu...",
  },
  {
    id: 5,
    name: 'Sacoche Élégante',
    price: 30000,
    category: 'sacoches',
    image:
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description:
        "La Sacoche Élégante est le parfait compromis entre praticité et raffinement...",
  },
];

const Shop: React.FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const search = searchParams.get('search')?.trim() || '';
  const { addToCart } = useCart();
  const { showToast } = useToast();

  // Filtrer les produits en fonction de la catégorie et/ou de la recherche
  let filteredProducts = products;
  if (category) {
    filteredProducts = filteredProducts.filter(
        (product) => product.category === category
    );
  }
  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sauvegarder le produit sélectionné dans le localStorage
  const handleProductClick = (product: Product) => {
    const productWithImages = {
      ...product,
      images: [product.image],
    };
    localStorage.setItem('selectedProduct', JSON.stringify(productWithImages));
  };

  // Ajouter le produit au panier
  const handleAjoutPanier = (product: Product) => {
    console.log(`Produit ajouté au panier : ${product.name}`);
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    showToast(`Le produit "${product.name}" a été ajouté au panier.`, 'success');

  };

  return (
      <div className="py-12 mt-16 px-6 text-base font-thin bg-[#f8f9fa]">
        <div className="w-full mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            {category
                ? category.charAt(0).toUpperCase() + category.slice(1)
                : search
                    ? `Résultats pour "${search}"`
                    : 'Tous les Produits'}
          </h1>

          {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        handleProductClick={handleProductClick}
                        handleAjoutPanier={handleAjoutPanier}
                    />
                ))}
              </div>
          ) : (
              <p>Aucun produit trouvé.</p>
          )}
        </div>
      </div>
  );
};

export default Shop;