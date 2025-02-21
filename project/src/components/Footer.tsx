// import React from 'react';
import { Instagram, Facebook, Phone } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

import logo from '../img/logo.png';
import {Link} from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-black text-white text-base font-thin py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4"><Link to="/" className="text-2xl font-bold flex items-center">
            <img
                src={logo} // Utilisation de la variable logo
                alt="Logo ATELIER GLACÉ"
                className="h-8 ml-2 filter invert"
            />
          </Link></h3>
          <p className="text-gray-300">
            Votre destination mode à Abidjan pour des lunettes, vêtements, 
            chaussures et sacoches de qualité.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="flex flex-col gap-2 text-gray-300">
            <p>Abidjan, Côte d'Ivoire</p>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+225 07 59 81 23 66</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/atelier_glace_?igsh=a2duajYzcGt6djZv&utm_source=qr" className="hover:text-gray-300">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/share/15s9jdySJf/?mibextid=wwXIfr" className="hover:text-gray-300">
              <Facebook size={24} />
            </a>
            <a
                href="https://www.tiktok.com/@atelier.glace?_t=ZN-8tFpZKX8fag&_r=1" // remplace le lien par ton URL TikTok
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
            >
              <SiTiktok size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
        <p>&copy; 2025 Atelier Glacé. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;