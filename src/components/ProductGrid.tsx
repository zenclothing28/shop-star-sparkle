import ProductCard from "./ProductCard";
import phoneImage from "@/assets/phone-product.jpg";
import laptopImage from "@/assets/laptop-product.jpg";
import headphonesImage from "@/assets/headphones-product.jpg";

const products = [
  {
    id: "1",
    name: "Latest Smartphone Pro Max 256GB",
    image: phoneImage,
    price: 89999,
    originalPrice: 99999,
    rating: 4.5,
    reviews: 2341,
    discount: 10
  },
  {
    id: "2", 
    name: "Premium Laptop 16-inch M2 Chip",
    image: laptopImage,
    price: 159999,
    originalPrice: 179999,
    rating: 4.8,
    reviews: 892,
    discount: 11
  },
  {
    id: "3",
    name: "Wireless Noise Cancelling Headphones",
    image: headphonesImage,
    price: 24999,
    originalPrice: 29999,
    rating: 4.6,
    reviews: 1205,
    discount: 17
  },
  {
    id: "4",
    name: "Professional Gaming Smartphone",
    image: phoneImage,
    price: 54999,
    originalPrice: 59999,
    rating: 4.3,
    reviews: 567,
    discount: 8
  },
  {
    id: "5",
    name: "Ultrabook Laptop 14-inch",
    image: laptopImage,
    price: 79999,
    originalPrice: 89999,
    rating: 4.4,
    reviews: 423,
    discount: 11
  },
  {
    id: "6",
    name: "Studio Quality Headphones",
    image: headphonesImage,
    price: 12999,
    originalPrice: 15999,
    rating: 4.2,
    reviews: 789,
    discount: 19
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the best products with amazing deals
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-ecommerce-blue text-white px-8 py-3 rounded-lg hover:bg-ecommerce-blue-light transition-colors font-medium">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;