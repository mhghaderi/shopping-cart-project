import React from "react";
import SearchFilter from "../components/SearchFilter.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
const ProductList = () => {
    return (
        <div className="container mx-auto p-5">
            <SearchFilter />
            <CategoryFilter />
        </div>
    );
};

export default ProductList;
