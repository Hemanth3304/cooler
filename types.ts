export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'hard' | 'soft' | 'electric' | 'drinkware';
  features: string[];
  capacity: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserInfo {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export type CheckoutStatus = 'idle' | 'processing' | 'success' | 'error';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
