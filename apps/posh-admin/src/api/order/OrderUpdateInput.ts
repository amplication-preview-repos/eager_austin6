import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  status?: string | null;
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};
