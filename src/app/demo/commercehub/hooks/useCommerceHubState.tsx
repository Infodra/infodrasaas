"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { CartItem } from "../lib/types";
import { useLocalStorageState } from "./useLocalStorageState";

type CommerceHubState = {
  cart: CartItem[];
  wishlist: string[];
  recentlyViewed: string[];
  addToCart: (productId: string, quantity?: number) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  addRecentlyViewed: (productId: string) => void;
  cartCount: number;
};

const CommerceHubContext = createContext<CommerceHubState | null>(null);

export function CommerceHubProvider({ children }: { children: ReactNode }) {
  const cartState = useLocalStorageState<CartItem[]>("commercehub-cart", []);
  const wishlistState = useLocalStorageState<string[]>("commercehub-wishlist", []);
  const viewedState = useLocalStorageState<string[]>("commercehub-viewed", []);

  const value = useMemo<CommerceHubState>(() => {
    const addToCart = (productId: string, quantity = 1) => {
      cartState.setValue((current) => {
        const existing = current.find((item) => item.productId === productId);
        if (existing) {
          return current.map((item) =>
            item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item
          );
        }
        return [...current, { productId, quantity }];
      });
    };

    const updateCartQuantity = (productId: string, quantity: number) => {
      cartState.setValue((current) =>
        current
          .map((item) => (item.productId === productId ? { ...item, quantity } : item))
          .filter((item) => item.quantity > 0)
      );
    };

    const removeFromCart = (productId: string) => {
      cartState.setValue((current) => current.filter((item) => item.productId !== productId));
    };

    const clearCart = () => cartState.setValue([]);

    const toggleWishlist = (productId: string) => {
      wishlistState.setValue((current) =>
        current.includes(productId)
          ? current.filter((id) => id !== productId)
          : [...current, productId]
      );
    };

    const addRecentlyViewed = (productId: string) => {
      viewedState.setValue((current) => {
        const next = [productId, ...current.filter((id) => id !== productId)];
        return next.slice(0, 8);
      });
    };

    const cartCount = cartState.value.reduce((sum, item) => sum + item.quantity, 0);

    return {
      cart: cartState.value,
      wishlist: wishlistState.value,
      recentlyViewed: viewedState.value,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      clearCart,
      toggleWishlist,
      addRecentlyViewed,
      cartCount,
    };
  }, [cartState, wishlistState, viewedState]);

  return <CommerceHubContext.Provider value={value}>{children}</CommerceHubContext.Provider>;
}

export function useCommerceHubState() {
  const context = useContext(CommerceHubContext);
  if (!context) {
    throw new Error("useCommerceHubState must be used within CommerceHubProvider");
  }
  return context;
}
