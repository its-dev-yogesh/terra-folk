"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Heart,
  Home,
  Menu,
  Minus,
  Plus,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

// Header Component
const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center justify-between">
      <Link href="/" className="flex items-center space-x-2" prefetch={false}>
        <ChevronLeft className="h-5 w-5" />
        <span className="font-medium">Back to Shopping</span>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium" prefetch={false}>
              Home
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium"
              prefetch={false}
            >
              Categories
            </Link>
            <Link
              href="/featured"
              className="text-sm font-medium"
              prefetch={false}
            >
              Featured
            </Link>
            <Link
              href="/bestsellers"
              className="text-sm font-medium"
              prefetch={false}
            >
              Best Sellers
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>
);

// Cart Item Component
const CartItem = ({ item, updateQuantity, removeItem }: any) => (
  <Card className="mb-4">
    <CardContent className="flex items-center p-4">
      <Image
        width={1000}
        height={1000}
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-md mr-4"
      />
      <div className="flex-grow">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">{item.variant}</p>
        <div className="flex items-center mt-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="mx-2">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="mt-2"
          onClick={() => removeItem(item.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </CardContent>
  </Card>
);

// Cart Summary Component
const CartSummary = ({ subtotal, shipping, total }: any) => (
  <Card>
    <CardContent className="p-4">
      <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Main Cart Page Component
export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Earbuds",
      variant: "Black",
      price: 79.99,
      quantity: 1,
      image: "/p2.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      variant: "Silver",
      price: 199.99,
      quantity: 1,
      image: "/p2.jpg",
    },
  ]);

  const updateQuantity = (id: any, newQuantity: any) => {
    if (newQuantity > 0) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: any) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Footer Component
  const Footer = () => (
    <footer className="fixed mx-auto px-4 bottom-0 left-0 right-0 bg-background border-t py-2">
      <div className="flex justify-around items-center">
        <Button
          variant="ghost"
          size="icon"
          className="flex flex-col items-center"
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="flex flex-col items-center"
        >
          <ShoppingBag className="h-5 w-5" />
          <span className="text-xs mt-1">Cart</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="flex flex-col items-center"
        >
          <Heart className="h-5 w-5" />
          <span className="text-xs mt-1">Wishlist</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="flex flex-col items-center"
        >
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Account</span>
        </Button>
      </div>
    </footer>
  );
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10; // Fixed shipping cost for this example
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ))}
            </div>
            <div>
              <CartSummary
                subtotal={subtotal}
                shipping={shipping}
                total={total}
              />
              <Button className="w-full mt-4">Proceed to Checkout</Button>
              <Button variant="outline" className="w-full mt-2">
                Continue Shopping
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-xl mb-4">Your cart is empty</p>
            <Button asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
