import Link from "next/link";
import { ChevronLeft, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

export default function CustomerProfilePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <User className="h-12 w-12 text-muted-foreground" />
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-sm text-muted-foreground">
                  Member since: Jan 2023
                </p>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value="john.doe@example.com"
                  readOnly
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" />
              </div>
              <Button>Update Profile</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
