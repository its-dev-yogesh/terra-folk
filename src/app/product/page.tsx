"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Heart,
  Share2,
  Star,
  Truck,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

// Header Component
const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center justify-between">
      <Link href="/" className="flex items-center space-x-2" prefetch={false}>
        <ChevronLeft className="h-5 w-5" />
        <span className="font-medium">Back</span>
      </Link>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Heart className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  </header>
);

// Product Image Gallery
const ProductImageGallery = ({ images }: any) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="w-full aspect-square">
        <img
          src={images[0]}
          alt="Main product image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image: any, index: any) => (
            <CarouselItem
              key={index}
              className="basis-1/4 md:basis-1/5 lg:basis-1/6"
            >
              <div className="p-1">
                <img
                  src={image}
                  alt={`Product image ${index + 1}`}
                  className="w-full aspect-square object-cover cursor-pointer rounded-md"
                  onClick={() => setMainImage(image)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

// Rating Component
const Rating = ({ rating, reviewCount }: any) => (
  <div className="flex items-center space-x-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`h-5 w-5 ${
          star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
    <span className="text-sm text-muted-foreground">
      ({reviewCount} reviews)
    </span>
  </div>
);

// Quantity Selector Component
const QuantitySelector = ({ quantity, setQuantity }: any) => (
  <div className="flex items-center space-x-2">
    <Button
      variant="outline"
      size="icon"
      onClick={() => setQuantity(Math.max(1, quantity - 1))}
    >
      <Minus className="h-4 w-4" />
    </Button>
    <span className="w-8 text-center">{quantity}</span>
    <Button
      variant="outline"
      size="icon"
      onClick={() => setQuantity(quantity + 1)}
    >
      <Plus className="h-4 w-4" />
    </Button>
  </div>
);

// Color Variant Selector Component
const ColorVariantSelector = ({
  colors,
  selectedColor,
  setSelectedColor,
}: any) => (
  <div className="flex flex-wrap gap-2">
    {colors.map((color: any) => (
      <button
        key={color.name}
        onClick={() => setSelectedColor(color.name)}
        className={`w-10 h-10 rounded-full border-2 ${
          selectedColor === color.name ? "border-primary" : "border-transparent"
        }`}
        style={{ backgroundColor: color.hex }}
      >
        {selectedColor === color.name && (
          <Check className="text-white mx-auto" />
        )}
        <span className="sr-only">{color.name}</span>
      </button>
    ))}
  </div>
);

// Size Variant Selector Component
const SizeVariantSelector = ({ sizes, selectedSize, setSelectedSize }: any) => (
  <div className="flex flex-wrap gap-2">
    {sizes.map((size: any) => (
      <button
        key={size}
        onClick={() => setSelectedSize(size)}
        className={`px-4 py-2 border rounded-md ${
          selectedSize === size
            ? "bg-primary text-primary-foreground"
            : "bg-background hover:bg-muted"
        }`}
      >
        {size}
      </button>
    ))}
  </div>
);

// Main Product Detail Component
export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const product = {
    name: "Premium Wireless Earbuds",
    description:
      "Experience crystal-clear audio with our latest noise-cancelling technology. Perfect for music lovers and professionals on the go.",
    costPrice: 199.99,
    salePrice: 149.99,
    rating: 4.5,
    reviewCount: 128,
    images: ["/p3.jpg", "/p2.jpg", "/p2.jpg", "/p2.jpg", "/p2.jpg", "/p2.jpg"],
    deliveryOptions: ["Free Delivery", "Express Delivery Available"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Blue", hex: "#0000FF" },
    ],
    sizes: ["S", "M", "L"],
  };

  const discountPercentage = Math.round(
    ((product.costPrice - product.salePrice) / product.costPrice) * 100
  );

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProductImageGallery images={product.images} />

        <div className="mt-6 space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-bold">
                ${product.salePrice.toFixed(2)}
              </span>
              <span className="ml-2 text-sm line-through text-muted-foreground">
                ${product.costPrice.toFixed(2)}
              </span>
            </div>
            <Badge variant="secondary" className="text-lg">
              {discountPercentage}% OFF
            </Badge>
          </div>

          <Rating rating={product.rating} reviewCount={product.reviewCount} />

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <ColorVariantSelector
                colors={product.colors}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <SizeVariantSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Delivery Options</h3>
            {product.deliveryOptions.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-primary" />
                <span>{option}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <div className="container mx-auto flex justify-between space-x-4">
          <Button className="flex-1" variant="outline">
            Add to Cart
          </Button>
          <Button className="flex-1">Buy Now</Button>
        </div>
      </div>
    </div>
  );
}
