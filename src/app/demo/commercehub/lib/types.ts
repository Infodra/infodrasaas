export type Category = {
  id: string;
  name: string;
  icon: string;
};

export type Brand = {
  id: string;
  name: string;
  featured: boolean;
};

export type ProductAvailability = "in-stock" | "low-stock" | "out-of-stock";

export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  stock: number;
  discount: number;
  availability: ProductAvailability;
  thumbnail: string;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  featured: boolean;
  bestSeller: boolean;
  trending: boolean;
  newest: boolean;
  popularity: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  totalSpent: number;
  orders: number;
  address: string;
};

export type Customer = User & {
  wishlist: string[];
  addresses: string[];
};

export type OrderItem = {
  productId: string;
  quantity: number;
  price: number;
};

export type OrderStatus = "Pending" | "Processing" | "Delivered" | "Cancelled";

export type Order = {
  id: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  date: string;
  invoice: string;
  trackingId: string;
  deliveryMethod: string;
  paymentMethod: string;
};

export type Review = {
  id: string;
  productId: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

export type Offer = {
  id: string;
  title: string;
  description: string;
  endsAt: string;
  code: string;
};

export type CouponStatus = "Active" | "Scheduled" | "Expired";

export type Coupon = {
  id: string;
  code: string;
  discount: number;
  type: "percentage" | "fixed";
  usage: number;
  expiry: string;
  status: CouponStatus;
};

export type CartItem = {
  productId: string;
  quantity: number;
};
