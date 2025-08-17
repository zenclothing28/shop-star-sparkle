import { Smartphone, Laptop, Headphones, Shirt, Home, Gift } from "lucide-react";

const categories = [
  { name: "Electronics", icon: Smartphone, color: "text-blue-600" },
  { name: "Fashion", icon: Shirt, color: "text-pink-600" },
  { name: "Home & Kitchen", icon: Home, color: "text-green-600" },
  { name: "Laptops", icon: Laptop, color: "text-purple-600" },
  { name: "Audio", icon: Headphones, color: "text-red-600" },
  { name: "Gifts", icon: Gift, color: "text-yellow-600" },
];

const CategoryNav = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 overflow-x-auto">
          <div className="flex space-x-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.name}
                  className="flex flex-col items-center space-y-1 cursor-pointer group hover:scale-105 transition-transform min-w-fit"
                >
                  <div className="p-3 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-ecommerce-blue transition-colors">
                    {category.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;