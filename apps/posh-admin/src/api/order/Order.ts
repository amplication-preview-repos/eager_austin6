import { OrderItem } from "../orderItem/OrderItem";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderItems?: Array<OrderItem>;
  status: string | null;
  total: number | null;
  updatedAt: Date;
  user?: User | null;
};
