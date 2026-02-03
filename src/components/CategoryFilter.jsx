import React from "react";
import { initialProducts } from "../data/product";

import { Tag } from "lucide-react";

const CategoryFilter = () => {
    const availableCategories = ["All", ...new Set(initialProducts.map((product) => product.category))];
    const [selectedCategory, setSelectedCategory] = React.useState("All");
    return (
        <>
            <div className="flex items-center flex-wrap gap-2 mt-4">
                <Tag className="text-orange-500 w-5 h-5 hidden sm:block" />
                {availableCategories.map((category) => (
                    <button
                        key={category}
                        className={`text-sm px-4 py-1 bg-gray-700 border-2 border-gray-600 text-gray-100 rounded-full 
                        // ${selectedCategory !== category ? `hover:bg-gray-700/50 hover:border-orange-500 hover:scale-105` : ""}
                        transition-all duration-200 ${selectedCategory === category ? "bg-orange-500 text-white border-orange-500" : ""}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </>
    );
};

export default CategoryFilter;
