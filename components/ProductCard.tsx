import React from 'react';
import { Plus, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1 text-xs font-bold shadow-sm text-slate-700">
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          {product.rating}
        </div>
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
           <button 
             onClick={() => onAddToCart(product)}
             className="pointer-events-auto bg-white text-slate-900 px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-2 hover:bg-blue-600 hover:text-white"
           >
             <Plus size={18} />
             Add to Cart
           </button>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-1">{product.category}</p>
            <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors">{product.name}</h3>
          </div>
          <p className="font-bold text-lg text-slate-900">${product.price}</p>
        </div>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {product.features.slice(0, 2).map((feature, idx) => (
            <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
