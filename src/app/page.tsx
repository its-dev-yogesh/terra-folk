"use client";
import { Key, useState } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  Star,
  Heart,
  Home,
  ShoppingBag,
  User,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 0,
    image: "https://example.com/product1.jpg",
    name: "Wireless Earbuds",
    price: 49.99,
    rating: 4.3,
  },
  {
    id: 1,
    image: "https://example.com/product2.jpg",
    name: "Smartphone Case",
    price: 15.99,
    rating: 4.7,
  },
  {
    id: 2,
    image: "https://example.com/product3.jpg",
    name: "Bluetooth Speaker",
    price: 89.99,
    rating: 4.6,
  },
  {
    id: 3,
    image: "https://example.com/product4.jpg",
    name: "Laptop Stand",
    price: 29.99,
    rating: 4.8,
  },
  {
    id: 4,
    image: "https://example.com/product5.jpg",
    name: "Gaming Mouse",
    price: 39.99,
    rating: 4.5,
  },
  {
    id: 5,
    image: "https://example.com/product6.jpg",
    name: "Fitness Tracker",
    price: 59.99,
    rating: 4.4,
  },
  {
    id: 6,
    image: "https://example.com/product7.jpg",
    name: "Portable Charger",
    price: 24.99,
    rating: 4.2,
  },
  {
    id: 7,
    image: "https://example.com/product8.jpg",
    name: "4K Action Camera",
    price: 119.99,
    rating: 4.7,
  },
  {
    id: 8,
    image: "https://example.com/product9.jpg",
    name: "Noise Cancelling Headphones",
    price: 199.99,
    rating: 4.9,
  },
  {
    id: 9,
    image: "https://example.com/product10.jpg",
    name: "Smartwatch",
    price: 149.99,
    rating: 4.6,
  },
];

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
        placeholder="Search products..."
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

// Banner Component
const Banner = () => (
  <div className="mb-6">
    <Carousel>
      <CarouselContent className="relative h-[200px] md:h-[300px] bg-gray-100">
        {[...Array(2)].map((category, index) => (
          <CarouselItem
            key={index}
            className="relative md:basis-1/4 lg:basis-1/6 min-h-full"
          >
            <img
              src="/placeholder.svg"
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <h2 className="text-2xl md:text-4xl font-bold">Summer Sale</h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
        <CarouselNext /> */}
    </Carousel>
  </div>
);

// Category Component
const CategorySection = () => {
  const categories = [
    { name: "Electronics", icon: "💻" },
    { name: "Clothing", icon: "👕" },
    { name: "Home", icon: "🏠" },
    { name: "Beauty", icon: "💄" },
    { name: "Sports", icon: "⚽" },
    { name: "Books", icon: "📚" },
    { name: "Home", icon: "🏠" },
    { name: "Beauty", icon: "💄" },
    { name: "Sports", icon: "⚽" },
    { name: "Books", icon: "📚" },
  ];

  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Categories</h2>
        <Link
          href="/categories"
          className="text-sm text-primary flex items-center"
          prefetch={false}
        >
          See All <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/4 lg:basis-1/6 basis-1/4"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl mb-2">
                  {category.icon}
                </div>
                <span className="text-sm">{category.name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ product }: any) => (
  <Card className="overflow-hidden">
    <CardContent className="p-0 relative">
      <Button
        variant="ghost"
        size="icon"
        className=" absolute h-8 w-8 right-2 top-2"
      >
        <Heart className="h-5 w-5" />
      </Button>

      <div className="relative w-full h-40 ">
        <img
          src="/placeholder.svg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h2 className="text-2xl md:text-4xl font-bold">Summer Sale</h2>
        </div>
      </div>
      <div className="p-4 bg-secondary">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold truncate">{product.name}</h3>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm ml-1">{product.rating}</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Product Section Component
const ProductSection = ({ title }: any) => (
  <section className="mb-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{"title"}</h2>
      <Link
        href={`/${"title".toLowerCase().replace(" ", "-")}`}
        className="text-sm text-primary flex items-center"
        prefetch={false}
      >
        See All <ChevronRight className="h-4 w-4 ml-1" />
      </Link>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product: { id: Key | null | undefined }) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
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

// Main Component
export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 79.99,
      rating: 4.5,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      rating: 4.7,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 39.99,
      rating: 4.3,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Portable Charger",
      price: 49.99,
      rating: 4.6,
      image: "/placeholder.svg",
    },
  ];

  const bestSellers = [
    {
      id: 5,
      name: "Phone Case",
      price: 19.99,
      rating: 4.4,
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 89.99,
      rating: 4.8,
      image: "/placeholder.svg",
    },
    {
      id: 7,
      name: "Fitness Tracker",
      price: 59.99,
      rating: 4.5,
      image: "/placeholder.svg",
    },
    {
      id: 8,
      name: "Wireless Mouse",
      price: 29.99,
      rating: 4.2,
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen pb-16">
      <Header />
      <main className="container mx-auto px-4">
        <SearchBar />
        <Banner />
        <CategorySection />
        <ProductSection title="Featured Products" products={featuredProducts} />
        <ProductSection title="Best Sellers" products={bestSellers} />
      </main>
      <Footer />
    </div>
  );
}
