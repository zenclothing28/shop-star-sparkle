import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  discount?: number;
}

const ProductCard = ({ 
  name, 
  image, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  discount 
}: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-product transition-all duration-300 hover:-translate-y-1 border-border">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {discount && (
            <div className="absolute top-3 left-3 bg-ecommerce-orange text-white px-2 py-1 rounded text-sm font-medium">
              {discount}% OFF
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-ecommerce-blue transition-colors">
            {name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) 
                      ? "text-yellow-400 fill-current" 
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ₹{price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button 
            variant="cart" 
            className="w-full"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;