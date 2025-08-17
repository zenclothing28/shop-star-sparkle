import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white shadow-header border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-ecommerce-blue">
              FlipMart
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input 
                placeholder="Search for products, brands and more"
                className="w-full pl-4 pr-12 h-10 border-border focus:ring-ecommerce-blue focus:border-ecommerce-blue"
              />
              <Button 
                variant="search" 
                size="sm"
                className="absolute right-0 top-0 h-10 rounded-l-none"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span className="text-sm">Login</span>
            </Button>
            
            <Button variant="ghost" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-ecommerce-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>

            <Button variant="ghost" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;