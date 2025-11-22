import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Snowflake } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cart, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className={`p-2 rounded-full ${scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} transition-colors duration-300`}>
            <Snowflake size={24} className="animate-pulse" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            ARCTIC<span className="font-light">FLOW</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Hard Coolers', 'Soft Coolers', 'Drinkware', 'Accessories'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                scrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenCart}
            className={`relative p-2 rounded-full transition-colors ${
              scrolled ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-white'
            }`}
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            className="md:hidden p-2 text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={scrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 md:hidden flex flex-col gap-4 px-6 animate-in slide-in-from-top-5">
           {['Hard Coolers', 'Soft Coolers', 'Drinkware', 'Accessories'].map((item) => (
            <a 
              key={item} 
              href="#"
              className="text-slate-800 font-medium py-2 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
