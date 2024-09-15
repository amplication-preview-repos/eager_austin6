import { Category } from "../category/Category";
import { OrderItem } from "../orderItem/OrderItem";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orderItems?: Array<OrderItem>;
  price: number | null;
  quantity: number | null;
  updatedAt: Date;
};
