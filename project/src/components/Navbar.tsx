import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, Search, X } from 'lucide-react';
import logo from '../img/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.pageYOffset);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    setShowSearch(false);
    setSearchQuery('');
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    // Afficher la navbar si l'utilisateur fait défiler vers le haut ou s'il est tout en haut
    if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // Vous pouvez ajouter prevScrollPos dans les dépendances si besoin
  }, [prevScrollPos]);

  return (
      <>
        <nav
            className={`bg-black text-white py-4 px-6 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
                showNavbar ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6">
              <button
                  className="lg:hidden"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Link to="/" className="text-2xl font-bold flex items-center">
                <img
                    src={logo}
                    alt="Logo ATELIER GLACÉ"
                    className="h-8 ml-2 filter invert"
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-base font-thin">
              <Link to="/" className="hover:text-gray-300">
                Accueil
              </Link>
              <Link to="/shop" className="hover:text-gray-300">
                Boutique
              </Link>
              <Link to="/shop?category=lunettes" className="hover:text-gray-300">
                Lunettes
              </Link>
              <Link to="/shop?category=vetements" className="hover:text-gray-300">
                Vêtements
              </Link>
              <Link to="/shop?category=chaussures" className="hover:text-gray-300">
                Chaussures
              </Link>
              <Link to="/shop?category=sacoches" className="hover:text-gray-300">
                Sacoches
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button
                  className="hover:text-gray-300"
                  onClick={() => setShowSearch(!showSearch)}
              >
                <Search size={20} />
              </button>
              <Link to="/checkout" className="hover:text-gray-300">
                <ShoppingBag size={20} />
              </Link>
            </div>
          </div>
        </nav>

        {/* Champ de recherche affiché */}
        {showSearch && (
            <div className="bg-black text-black py-2 px-6 mt-16">
              <div className="max-w-7xl mx-auto">
                <form onSubmit={handleSearchSubmit}>
                  <input
                      type="text"
                      placeholder="Recherche…"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full p-2 rounded"
                  />
                </form>
              </div>
            </div>
        )}

        {/* Menu mobile */}
        {isOpen && (
            <div className="bg-black text-white text-base font-thin mt-2 lg:hidden">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link
                        onClick={toggleMenu}
                        to="/"
                        className="hover:text-gray-300"
                    >
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link
                        onClick={toggleMenu}
                        to="/shop"
                        className="hover:text-gray-300"
                    >
                      Boutique
                    </Link>
                  </li>
                  <li>
                    <Link
                        onClick={toggleMenu}
                        to="/shop?category=lunettes"
                        className="hover:text-gray-300"
                    >
                      Lunettes
                    </Link>
                  </li>
                  <li>
                    <Link
                        onClick={toggleMenu}
                        to="/shop?category=vetements"
                        className="hover:text-gray-300"
                    >
                      Vêtements
                    </Link>
                  </li>
                  <li>
                    <Link
                        onClick={toggleMenu}
                        to="/shop?category=chaussures"
                        className="hover:text-gray-300"
                    >
                      Chaussures
                    </Link>
                  </li>
                  <li>
                    <Link
                        onClick={toggleMenu}
                        to="/shop?category=sacoches"
                        className="hover:text-gray-300"
                    >
                      Sacoches
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
        )}
      </>
  );
};

export default Navbar;