"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, Search, Home, ShoppingBag, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";

// Header Component
const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center">
      <div className="mr-4 flex flex-1 items-center justify-between">
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

// Search Bar Component
const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", search);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative w-full max-w-sm mx-auto my-4"
    >
      <Input
        type="text"
        placeholder="Search categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pr-10"
      />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
};

// Category Card Component
const CategoryCard = ({ category }: any) => (
  <Card className="overflow-hidden hover:shadow-md transition-shadow">
    <CardContent className="p-4">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-4xl mb-3">
          {category.icon}
        </div>
        <h3 className="font-semibold text-lg">{category.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {category.itemCount} items
        </p>
      </div>
    </CardContent>
  </Card>
);

// Footer Component
const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 bg-background border-t py-2">
    <div className="container flex justify-around items-center">
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
        <span className="text-xs mt-1">Shop</span>
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

export default function Page() {
  const categories = [
    { id: 1, name: "Electronics", icon: "💻", itemCount: 1500 },
    { id: 2, name: "Clothing", icon: "👕", itemCount: 2000 },
    { id: 3, name: "Home & Garden", icon: "🏠", itemCount: 1200 },
    { id: 4, name: "Beauty", icon: "💄", itemCount: 800 },
    { id: 5, name: "Sports", icon: "⚽", itemCount: 600 },
    { id: 6, name: "Books", icon: "📚", itemCount: 3000 },
    { id: 7, name: "Toys", icon: "🧸", itemCount: 1000 },
    { id: 8, name: "Automotive", icon: "🚗", itemCount: 500 },
    { id: 9, name: "Jewelry", icon: "💍", itemCount: 400 },
    { id: 10, name: "Health", icon: "🏥", itemCount: 700 },
    { id: 11, name: "Pet Supplies", icon: "🐾", itemCount: 550 },
    { id: 12, name: "Food & Beverages", icon: "🍔", itemCount: 1800 },
  ];

  return (
    <div className="min-h-screen pb-16">
      <Header />
      <main className="container mx-auto px-4">
        <SearchBar />
        <h1 className="text-2xl font-bold mb-6">All Categories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
