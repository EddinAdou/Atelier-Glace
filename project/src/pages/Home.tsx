import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Lunettes de soleil"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white text-base font-thin px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">ATELIER GLACÉ</h1>
            <p className="text-xl md:text-2xl mb-8">Découvrez notre collection exclusive de lunettes</p>
            <Link
                to="/shop?category=lunettes"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 transition-colors hover:bg-black hover:text-white"
            >
              Découvrir <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-base font-thin">
          <h2 className="text-3xl font-bold text-center mb-12 ">Nos Catégories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Lunettes',
                image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Vêtements',
                image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Chaussures',
                image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Sacoches',
                image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((category, index) => (
              <Link 
                key={index}
                to={`/shop?category=${category.title.toLowerCase()}`}
                className="group relative h-64 overflow-hidden"
              >
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;