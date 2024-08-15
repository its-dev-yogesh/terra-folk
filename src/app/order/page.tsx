import Link from "next/link";
import { Menu, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => (
  // Same as previous Header component
  <></>
);

const OrderCard = ({ order }: any) => (
  <Card className="mb-4">
    <CardContent className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Order #{order.id}</h3>
          <p className="text-sm text-muted-foreground">{order.date}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">${order.total.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground">{order.status}</p>
        </div>
      </div>
      <Button asChild className="mt-4">
        <Link href={`/orders/${order.id}`}>View Details</Link>
      </Button>
    </CardContent>
  </Card>
);

export default function CustomerOrderListPage() {
  const orders = [
    { id: "1001", date: "2023-05-15", total: 129.99, status: "Delivered" },
    { id: "1002", date: "2023-06-02", total: 79.99, status: "Shipped" },
    { id: "1003", date: "2023-06-10", total: 199.99, status: "Processing" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </main>
    </div>
  );
}
