import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2, CreditCard, Lock } from 'lucide-react';
import { CheckoutStatus } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onComplete: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, total, onComplete }) => {
  const [status, setStatus] = useState<CheckoutStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    card: '',
    expiry: '',
    cvc: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('processing');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onComplete();
        setStatus('idle');
      }, 3000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Lock size={20} className="text-green-600" /> Secure Checkout
          </h3>
          <div className="text-right">
            <p className="text-xs text-slate-500">Total Amount</p>
            <p className="text-lg font-bold text-blue-600">${total.toFixed(2)}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {status === 'idle' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Cardholder Name</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    required
                    type="text" 
                    name="card"
                    value={formData.card}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Expiry</label>
                  <input 
                    required
                    type="text" 
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
                  <input 
                    required
                    type="text" 
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="123"
                  />
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform active:scale-95"
                >
                  Pay Now
                </button>
              </div>
            </form>
          )}

          {status === 'processing' && (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <Loader2 size={48} className="text-blue-600 animate-spin" />
              <p className="text-lg font-medium text-slate-700">Processing secure payment...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Payment Successful!</h4>
                <p className="text-slate-500">Your order #89203 has been confirmed.</p>
              </div>
            </div>
          )}

           {status === 'error' && (
            <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle size={32} className="text-red-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Payment Failed</h4>
                <p className="text-slate-500">Please try again or use a different card.</p>
              </div>
               <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-lg"
                >
                  Try Again
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
