import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Header Component
const Header = () => (
  <header className="mx-auto px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className=" flex h-14 items-center">
      <div className="flex flex-1 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">E-Shop</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
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
              <Link
                href="/cart"
                className="text-sm font-medium"
                prefetch={false}
              >
                cart
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <Link href="/" prefetch={false}>
          Home
        </Link>
        <Link href="/categories" prefetch={false}>
          Categories
        </Link>
        <Link href="/featured" prefetch={false}>
          Featured
        </Link>
        <Link href="/bestsellers" prefetch={false}>
          Best Sellers
        </Link>
      </nav>
    </div>
  </header>
);

export default function CheckoutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Shipping Information
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input id="zipCode" />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              {/* Add order summary details here */}
              <Button className="w-full mt-4">Place Order</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
