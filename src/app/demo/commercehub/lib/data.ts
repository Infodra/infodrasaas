import categoriesJson from "../data/categories.json";
import brandsJson from "../data/brands.json";
import customersJson from "../data/customers.json";
import couponsJson from "../data/coupons.json";
import productsJson from "../data/products.json";
import usersJson from "../data/users.json";
import ordersJson from "../data/orders.json";
import reviewsJson from "../data/reviews.json";
import offersJson from "../data/offers.json";
import type { Brand, Category, Coupon, Customer, Offer, Order, Product, Review, User } from "./types";

export const categories = categoriesJson as Category[];
export const brands = brandsJson as Brand[];
export const products = productsJson as unknown as Product[];
export const users = usersJson as User[];
export const customers = customersJson as Customer[];
export const coupons = couponsJson as Coupon[];
export const orders = ordersJson as Order[];
export const reviews = reviewsJson as Review[];
export const offers = offersJson as Offer[];

export const productsById = new Map(products.map((product) => [product.id, product]));
export const usersById = new Map(users.map((user) => [user.id, user]));
export const customersById = new Map(customers.map((customer) => [customer.id, customer]));

export function getProductById(id: string) {
  return productsById.get(id);
}

export function getUserById(id: string) {
  return usersById.get(id);
}

export function getReviewsForProduct(productId: string) {
  return reviews.filter((review) => review.productId === productId);
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
