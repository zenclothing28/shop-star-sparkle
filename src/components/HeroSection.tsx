import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-16">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Shop Smart,
              <br />
              <span className="text-ecommerce-orange">Save More</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-lg">
              Discover amazing deals on electronics, fashion, and more. 
              Free shipping on orders over $50!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cart" size="lg" className="text-lg px-8 py-4">
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-ecommerce-blue text-lg px-8 py-4"
              >
                View Deals
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img 
              src={heroBanner}
              alt="Shopping hero banner"
              className="w-full h-auto rounded-lg shadow-product"
            />
            <div className="absolute -top-4 -right-4 bg-ecommerce-orange text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
              50% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;