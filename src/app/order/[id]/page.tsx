import Link from "next/link";
import { Menu, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => (
  // Same as previous Header component
  <></>
);

export default function OrderDetailPage() {
  const order = {
    id: "1001",
    date: "2023-05-15",
    total: 129.99,
    status: "Delivered",
    items: [
      { id: 1, name: "Wireless Earbuds", price: 79.99, quantity: 1 },
      { id: 2, name: "Phone Case", price: 19.99, quantity: 2 },
    ],
    shippingAddress: "123 Main St, Anytown, AN 12345",
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Link href="/orders" className="flex items-center text-primary mb-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Orders
        </Link>
        <h1 className="text-2xl font-bold mb-6">Order #{order.id}</h1>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <div>
                <p className="font-semibold">Order Date</p>
                <p>{order.date}</p>
              </div>
              <div>
                <p className="font-semibold">Total</p>
                <p>${order.total.toFixed(2)}</p>
              </div>
              <div>
                <p className="font-semibold">Status</p>
                <p>{order.status}</p>
              </div>
            </div>
            <h2 className="text-xl font-semibold mt-6 mb-2">Items</h2>
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between py-2 border-b">
                <p>
                  {item.name} x {item.quantity}
                </p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <h2 className="text-xl font-semibold mt-6 mb-2">
              Shipping Address
            </h2>
            <p>{order.shippingAddress}</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
