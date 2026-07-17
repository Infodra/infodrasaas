import { orders, usersById } from "../lib/data";
import { OrderCard } from "../components/OrderCard";

export default function OrderHistoryPage() {
  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-2xl font-bold">Order History</h1>
      <div className="space-y-3">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} customerName={usersById.get(order.userId)?.name} />
        ))}
      </div>
    </div>
  );
}
