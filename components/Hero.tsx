import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-blue-900">
      {/* Background Gradient & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left space-y-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium tracking-wider mb-2">
            ENGINEERED FOR THE EXTREME
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
            Keep It Cold.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Keep It Going.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto md:mx-0 font-light">
            Experience the next generation of thermal engineering. Designed to hold ice longer, carry easier, and last forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 group">
              Shop Now 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
              Watch Video
            </button>
          </div>
        </div>

        <div className="flex-1 relative h-[400px] md:h-[600px] w-full flex items-center justify-center fade-in-up" style={{ animationDelay: '0.4s' }}>
          {/* Floating Product Image Placeholder */}
          <div className="relative w-full max-w-lg animate-float">
             <img 
               src="https://picsum.photos/id/200/800/800" 
               alt="Hero Cooler" 
               className="w-full h-auto object-contain drop-shadow-2xl scale-110"
               style={{ filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.5))' }}
             />
             
             {/* Annotations */}
             <div className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                <p className="font-bold text-sm">Ice Retention</p>
                <p className="text-2xl font-bold text-cyan-400">7 Days</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
