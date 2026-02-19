"use client";
import React, { createContext, useContext, useState } from 'react';
import { ReactNode } from 'react';

// Cart context
interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};

function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const addItem = (item: CartItem) => setItems((s) => [...s, item]);
  const removeItem = (productId: string) => setItems((s) => s.filter((i) => i.productId !== productId));
  const clearCart = () => setItems([]);
  const value: CartContextValue = { items, itemCount: items.length, addItem, removeItem, clearCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Auth context (simple)
interface AuthContextValue {
  userId?: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

function AuthProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const login = async (email: string) => setUserId('mock-user');
  const logout = () => setUserId(undefined);
  return <AuthContext.Provider value={{ userId, login, logout }}>{children}</AuthContext.Provider>;
}

// Theme provider
type Theme = 'dark' | 'light';
const ThemeContext = createContext<{ theme: Theme; toggle: () => void } | undefined>(undefined);
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
}
