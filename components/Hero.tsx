import React, { useState, useEffect } from 'react';
import img1 from '../images/home/z7284653133829_68e1bbf3517c5a1652411249a583fd69.jpg';
import img2 from '../images/home/z7291912032050_97e0bc5774448b56aaa41517fe0dadd5.jpg';
import img3 from '../images/home/z7291912035460_15b20dc32b883fcff0739b51bc14fda1.jpg';
import img4 from '../images/home/z7291912049436_4105df303e3d7949def3955810e1e668.jpg';
import img5 from '../images/home/z7291912051888_5b02827513685e79bc6fa353875ac540.jpg';
import imgBlackCharcoal from '../images/products/Eucalyptus black charcoal.jpg';
import imgWhiteCharcoal from '../images/products/Orange white charcoal.jpg';
import imgBriquettes from '../images/products/Saw dust briquettes.jpeg';
import { 
  Trees, 
  Award, 
  Leaf, 
  Ship, 
  Flame, 
  Package, 
  Globe, 
  Factory, 
  Zap, 
  Recycle, 
  Mail, 
  Phone, 
  MapPin, 
  Send 
} from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  // Local hero image slider
  const heroImages = [
    { src: img1, alt: 'Natural wood charcoal production' },
    { src: img2, alt: 'Premium charcoal ready for export' },
    { src: img3, alt: 'Charcoal loading at international port' },
    { src: img4, alt: 'Charcoal quality control before export' },
    { src: img5, alt: 'Packed charcoal products ready for shipment' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 1500);
    return () => clearInterval(id);
  }, [heroImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide((index + heroImages.length) % heroImages.length);
  };

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <div className="relative bg-zinc-950 min-h-[calc(100vh-96px)] flex items-center">
        {/* Background gradients */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-10 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                Premium Natural Charcoal
              </h1>
              
              <div className="space-y-8 text-xl text-zinc-400 leading-relaxed font-light">
                <p>
                  Vietnamese charcoal is valued for its high quality and stable heat output, produced from
                  dense hardwoods such as Ko Nia, Eucalyptus, and Coffee wood. This results in long-burning,
                  low-smoke, and eco-friendly charcoal.
                </p>

                <p>
                  With a long, strategically located coastline, Vietnam holds strong advantages in global
                  shipping and trade. The country ranks among the top 15 exporters worldwide, with
                  charcoal exports reaching about USD 400 million annually.
                </p>

                <p>
                  Supported by major FTAs and reliable production capacity, Vietnam is increasingly
                  recognized as one of Asia's leading and most trusted charcoal suppliers.
                </p>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative h-full flex items-center justify-center">
               <div className="group relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900">
                 {/* Slides */}
                 {heroImages.map((image, index) => (
                   <img
                     key={image.src}
                     src={image.src}
                     alt={image.alt}
                     className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                       index === currentSlide ? 'opacity-100' : 'opacity-0'
                     }`}
                   />
                 ))}

                 {/* Gradient overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                 {/* Controls */}
                 {heroImages.length > 1 && (
                   <>
                     {/* Arrows */}
                     <button
                       type="button"
                       onClick={() => goToSlide(currentSlide - 1)}
                       className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-black/40 border border-zinc-700 text-zinc-200 flex items-center justify-center hover:bg-black/70 hover:border-emerald-500/60 transition-colors opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                       aria-label="Previous image"
                     >
                       ‹
                     </button>
                     <button
                       type="button"
                       onClick={() => goToSlide(currentSlide + 1)}
                       className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-black/40 border border-zinc-700 text-zinc-200 flex items-center justify-center hover:bg-black/70 hover:border-emerald-500/60 transition-colors opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                       aria-label="Next image"
                     >
                       ›
                     </button>

                     {/* Dots */}
                     <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-20">
                       {heroImages.map((_, index) => (
                         <button
                           key={index}
                           type="button"
                           onClick={() => goToSlide(index)}
                           className={`h-2.5 rounded-full transition-all duration-300 ${
                             index === currentSlide
                               ? 'w-6 bg-emerald-500'
                               : 'w-2.5 bg-zinc-600/70 hover:bg-zinc-300'
                           }`}
                           aria-label={`Go to slide ${index + 1}`}
                         />
                       ))}
                     </div>
                   </>
                 )}
               </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* 2. STATS SECTION */}
      <div className="bg-zinc-900 border-y border-zinc-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 text-center">
            
            <div className="flex flex-col items-center">
              <div className="bg-zinc-800/50 p-5 rounded-full mb-6 text-emerald-500">
                <Globe size={40} />
              </div>
              <div className="text-5xl font-bold text-white mb-3">25+</div>
              <div className="text-zinc-400 text-base uppercase tracking-wider">Countries Served</div>
            </div>

            <div className="hidden md:block w-px h-24 bg-zinc-800"></div>

            <div className="flex flex-col items-center">
              <div className="bg-zinc-800/50 p-5 rounded-full mb-6 text-emerald-500">
                <Factory size={40} />
              </div>
              <div className="text-5xl font-bold text-white mb-3">3</div>
              <div className="text-zinc-400 text-base uppercase tracking-wider">Production Facilities</div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. WHY CHOOSE US */}
      <div className="bg-zinc-950 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose GLOBAL EX</h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-xl">
              Premium charcoal products backed by sustainable practices and export excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Trees className="w-10 h-10" />,
                title: "Natural Wood Sources",
                desc: "100% natural hardwood from responsibly managed forests in Vietnam"
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Hand-Sorted Quality",
                desc: "Premium grade selection ensuring consistent size, low ash, and high heat output"
              },
              {
                icon: <Leaf className="w-10 h-10" />,
                title: "Eco-Friendly Production",
                desc: "Low-smoke kilns with minimal additives and certified sustainability practices"
              },
              {
                icon: <Ship className="w-10 h-10" />,
                title: "Global Logistics",
                desc: "Direct export from Vietnamese coastal ports with reliable shipping schedules"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors group flex flex-row items-start">
                <div className="w-20 h-20 rounded-xl bg-zinc-800 flex shrink-0 items-center justify-center text-emerald-500 mr-8 group-hover:bg-emerald-500/10 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-zinc-400 text-base leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. FEATURED PRODUCTS */}
      <div className="bg-zinc-900/30 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Products</h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-xl">
              Export-grade charcoal products certified for quality and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Black Charcoal",
                tag: "Featured",
                image: imgBlackCharcoal,
                desc: "High-quality black charcoal with stable heat output",
                specs: [
                  "Moisture: < 8%",
                  "Ash content: < 8%",
                  "Calorific value: > 6500 kcal/kg"
                ],
                pkg: "According to customer requirements",
                moq: "1 container (~ 13 tons)"
              },
              {
                title: "White Charcoal",
                tag: "Featured",
                image: imgWhiteCharcoal,
                desc: "Premium grade white charcoal known for high heat and purity",
                specs: [
                  "Moisture: < 2%",
                  "Ash content: < 2.5%",
                  "Calorific value: > 7800 kcal/kg"
                ],
                pkg: "According to customer requirements",
                moq: "1 container (~ 13 tons)"
              },
              {
                title: "Saw Dust Briquettes Charcoal",
                tag: "Featured",
                image: imgBriquettes,
                desc: "High density briquettes with long burning time",
                specs: [
                  "Moisture: < 3%",
                  "Ash content: < 3%",
                  "Calorific value: > 7200 kcal/kg"
                ],
                pkg: "According to customer requirements",
                moq: "1 container (~ 13 tons)"
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden flex flex-col hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-900/20 hover:scale-[1.02] transition-all duration-300 group">
                <div className="w-full h-64 bg-zinc-800/50 flex items-center justify-center relative border-b border-zinc-800 group-hover:bg-zinc-800/70 transition-colors overflow-hidden">
                  {product.tag && (
                    <span className="absolute top-6 right-6 bg-amber-600/90 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                      {product.tag}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-zinc-400 text-base mb-8">{product.desc}</p>
                  
                  <div className="space-y-6 flex-1">
                    <div>
                      <div className="flex items-center text-emerald-500 mb-3">
                        <Leaf size={18} className="mr-2" />
                        <span className="text-sm font-bold uppercase tracking-wide">Specifications</span>
                      </div>
                      <ul className="text-zinc-300 text-sm space-y-2 ml-4 list-disc marker:text-emerald-600">
                        {product.specs.map((spec, i) => (
                          <li key={i}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-emerald-500 mb-3">
                        <Package size={18} className="mr-2" />
                        <span className="text-sm font-bold uppercase tracking-wide">Packaging</span>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">{product.pkg}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-800">
                    <p className="text-zinc-500 text-sm">
                      <span className="font-semibold text-zinc-400">MOQ:</span> {product.moq}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={onCtaClick}
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold rounded-lg text-emerald-500 border border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>

      {/* 5. SUSTAINABILITY (UPDATED) */}
      <div className="bg-zinc-950 py-28 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-900/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-900/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Sustainable Charcoal — <br className="hidden md:block" />
                <span className="text-emerald-500">From Responsible Forests to Your Port</span>
              </h2>
              <div className="h-1.5 w-24 bg-emerald-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="text-zinc-300 text-lg md:text-xl leading-relaxed space-y-8 font-light tracking-wide text-justify md:text-left">
              <p>
                <strong className="text-white font-semibold">Vietnam’s premium hardwoods</strong> — such as Ko Nia, Eucalyptus, Coffee wood, … — create charcoal known for high heat output, long burn time, low moisture, and clean combustion. At <strong className="text-emerald-400 font-semibold">GLOBAL EX</strong>, sustainability is our sales standard. We source stable-quality wood, use energy-efficient kilns, and apply a zero-waste production process to create premium charcoal with minimal carbon emissions.
              </p>
              <p>
                We supply <span className="text-white">Natural black charcoal</span>, <span className="text-white">White charcoal</span>, and <span className="text-white">Sawdust briquettes</span>, all meeting high international market standards. Our products feature low moisture (≤2–8%), low ash (≤2–8%), calorific value &gt; 6,500 kcal/kg, and burning time over 4 hours — providing strong, consistent heat while reducing fuel costs. All charcoal is chemical-free and safe for BBQ grilling.
              </p>
              <p>
                <strong className="text-emerald-400 font-semibold">GLOBAL EX</strong> provides a full set of export documents to ensure smooth customs clearance in major markets such as Japan, South Korea, the EU, and the Middle East.
              </p>
              <p className="font-medium text-white/90">
                With flexible packaging options (7–25 kg, OEM), GLOBAL EX is committed to delivering sustainable, reliable, and high-quality charcoal to partners worldwide.
              </p>
            </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;