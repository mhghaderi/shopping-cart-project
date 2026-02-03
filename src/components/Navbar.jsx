import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Home } from "lucide-react";
const Navbar = () => {
    return (
        <>
            <header
                className="sticky top-0 bg-gray-950/90 backdrop-blur-md text-white shadow-2xl
                shadow-gray-950/70 border-b border-orange-900"
            >
                <div className="container mx-auto p-4 flex items-center justify-between">
                    <Link to={"/"}>
                        <div className="flex items-center space-x-1 cursor-pointer">
                            <Home className="w-8 h-8 text-orange-500" />
                            <h1 className="text-3xl font-bold tracking-widest uppercase">Mincity</h1>
                        </div>
                    </Link>
                    <nav className="flex items-center space-x-6">
                        <Link
                            to={"/cart"}
                            className="relative p-3 bg-orange-500/10
                                rounded-xl hover:bg-orange-500/20 transition duration-200 border 
                                border-orange-400/50 shadow-lg cursor-pointer"
                        >
                            <ShoppingCart className="w-5 h-5 text-orange-400" />
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
