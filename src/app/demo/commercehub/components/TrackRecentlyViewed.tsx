"use client";

import { useEffect } from "react";
import { useCommerceHubState } from "../hooks/useCommerceHubState";

export function TrackRecentlyViewed({ productId }: { productId: string }) {
  const { addRecentlyViewed } = useCommerceHubState();

  useEffect(() => {
    addRecentlyViewed(productId);
  }, [productId, addRecentlyViewed]);

  return null;
}
