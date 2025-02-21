import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    status?: string;
}

interface ProductCardProps {
    product: Product;
    handleProductClick: (product: Product) => void;
    handleAjoutPanier: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
                                                     product,
                                                     handleProductClick,
                                                     handleAjoutPanier,
                                                 }) => {
    return (
        <div className="group relative hover:shadow-lg bg-white overflow-hidden">
            {/* Container image */}
            <div className="relative">
                {/* Overlay circulaire */}
                <div
                    className="absolute top-1/2 left-1/2 w-[20px] h-[230px] bg-black opacity-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:opacity-100"
                    aria-hidden="true"
                ></div>
                {/* Statut (optionnel) */}
                {product.status && (
                    <span className="absolute top-0 left-0 px-2 py-1 text-xs uppercase tracking-widest transform rotate-180">
            {product.status}
          </span>
                )}
                <Link
                    to={`/product/${product.id}`}
                    onClick={() => handleProductClick(product)}
                    className="block"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="block w-full h-60 md:h-[500px] object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                    />
                </Link>
                {/* Bouton d'ajout au panier qui apparaît au hover */}
                <button
                    onClick={() => handleAjoutPanier(product)}
                    className="absolute bottom-4 right-4 px-4 py-2 bg-black flex items-center justify-center opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                >
                    <span className="text-white">Ajouter au panier</span>
                </button>
            </div>

            {/* Description du produit */}
            <div className="p-4">
                <h3 className="text-sm font-bold uppercase mb-1">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-gray-800 text-sm">{product.price.toLocaleString()} FCFA</p>
            </div>
        </div>
    );
};

export default ProductCard;