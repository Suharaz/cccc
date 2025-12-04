import React, { useState } from 'react';
import { Leaf, Package, ArrowRight } from 'lucide-react';
import imgApricotWhite from '../images/products/Apricot tree white charcoal.jpg';
import imgEucalyptusBlack from '../images/products/Eucalyptus black charcoal.jpg';
import imgEucalyptusWhite from '../images/products/Eucalyptus white charcoal.jpeg';
import imgLonganBlack from '../images/products/Longan black charcoal.jpg';
import imgOrangeWhite from '../images/products/Orange white charcoal.jpg';
import imgSawDust from '../images/products/Saw dust briquettes.jpeg';

interface Product {
  title: string;
  tag: string;
  isFeatured?: boolean;
  category: string;
  image: string;
  desc: string;
  specs: string[];
  pkg: string;
  moq: string;
}

interface ProductsProps {
  onContactClick: () => void;
}

const Products: React.FC<ProductsProps> = ({ onContactClick }) => {
  const [activeFilter, setActiveFilter] = useState('All Products');

  const filters = ['All Products', 'Black Charcoal', 'White Charcoal', 'Saw dust briquettes'];

  const products: Product[] = [
    {
      title: "Premium Charcoal Briquettes",
      tag: "Briquettes",
      isFeatured: true,
      category: "Black Charcoal",
      image: imgSawDust,
      desc: "High-density hexagonal briquettes with 4+ hour burn time",
      specs: ["Moisture: < 5%", "Ash content: < 3%", "Calorific value: 7,500 kcal/kg"],
      pkg: "10kg carton box, 50 boxes per pallet",
      moq: "1 container (20 tons)"
    },
    {
      title: "Natural Lump Charcoal",
      tag: "Lump",
      isFeatured: true,
      category: "Black Charcoal",
      image: imgLonganBlack,
      desc: "Premium hardwood lump charcoal for high-heat grilling",
      specs: ["Moisture: < 6%", "Ash content: < 2%", "Burn time: 3-4 hours"],
      pkg: "5kg or 10kg kraft paper bags",
      moq: "500 kg"
    },
    {
      title: "Eco BBQ Briquettes",
      tag: "Eco",
      category: "Saw dust briquettes",
      image: imgSawDust,
      desc: "Sustainable coconut shell briquettes with minimal smoke",
      specs: ["Moisture: < 7%", "Ash content: < 4%", "No chemical additives"],
      pkg: "3kg retail box, 10kg bulk bag",
      moq: "200 kg"
    },
    {
      title: "Restaurant Grade Charcoal",
      tag: "Lump",
      category: "Black Charcoal",
      image: imgEucalyptusBlack,
      desc: "Extra-large lump charcoal for commercial kitchens",
      specs: ["Moisture: < 5%", "Ash content: < 2.5%", "Average size: 15-20cm"],
      pkg: "20kg kraft bags",
      moq: "1 ton"
    },
    {
      title: "Shisha Charcoal Cubes",
      tag: "Briquettes",
      category: "Saw dust briquettes",
      image: imgApricotWhite,
      desc: "Quick-light coconut shell cubes for hookah lounges",
      specs: ["Moisture: < 6%", "Ash content: < 5%", "Burn time: 60+ minutes"],
      pkg: "1kg retail boxes",
      moq: "100 kg"
    },
    {
      title: "Hardwood Charcoal Chunks",
      tag: "Lump",
      category: "Black Charcoal",
      image: imgEucalyptusWhite,
      desc: "Mixed hardwood charcoal for authentic BBQ flavor",
      specs: ["Moisture: < 7%", "Fixed carbon: > 75%", "Burn time: 2-3 hours"],
      pkg: "8kg bags, palletized",
      moq: "500 kg"
    }
  ];

  const filteredProducts = activeFilter === 'All Products'
    ? products
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="bg-zinc-950 min-h-screen py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-zinc-400 text-xl">
            Premium export-grade charcoal products certified for quality and sustainability
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 flex flex-col group">
              
              {/* Image Area */}
              <div className="bg-zinc-900 h-64 flex items-center justify-center relative border-b border-zinc-800 group-hover:bg-zinc-800/80 transition-colors overflow-hidden">
                 {/* Featured Badge */}
                 {product.isFeatured && (
                  <span className="absolute top-4 right-4 bg-amber-600/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Featured
                  </span>
                )}
                
                {/* Tag Badge */}
                <span className="absolute top-4 left-4 bg-zinc-800/90 text-zinc-300 border border-zinc-700 text-xs font-bold px-3 py-1 rounded-full z-10">
                    {product.tag}
                </span>

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-zinc-400 text-sm mb-6 min-h-[40px]">{product.desc}</p>

                <div className="space-y-5 flex-1">
                  <div>
                    <div className="flex items-center text-emerald-500 mb-2">
                      <Leaf size={16} className="mr-2" />
                      <span className="text-xs font-bold uppercase tracking-wide">Specifications:</span>
                    </div>
                    <ul className="text-zinc-300 text-sm space-y-1.5 ml-1 pl-4 border-l-2 border-zinc-800">
                      {product.specs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center text-emerald-500 mb-2">
                      <Package size={16} className="mr-2" />
                      <span className="text-xs font-bold uppercase tracking-wide">Packaging:</span>
                    </div>
                    <p className="text-zinc-300 text-sm pl-6">{product.pkg}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-zinc-800 mb-6">
                     <p className="text-zinc-500 text-xs">
                      <span className="font-semibold text-zinc-400">MOQ:</span> {product.moq}
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-auto">
                    <button 
                        onClick={onContactClick}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-emerald-900/20"
                    >
                        Detail: Contact Us
                        <ArrowRight size={16} />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;