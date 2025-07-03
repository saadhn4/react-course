import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

export const OrdersGrid = ({ orders }) => {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />

            <OrderDetailsGrid order={order} />
          </div>
        );
      })}
    </div>
  );
};
