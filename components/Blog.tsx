import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
// Import blog images - please rename files to match these names (without spaces/special chars)
import imgGuideChoosing from '../images/blog/guide-choosing-high-quality-charcoal.png';
import imgMarketOverview from '../images/blog/charcoal-market-overview.png';
import imgPopularTypes from '../images/blog/popular-types-charcoal.png';
import imgVietnamForests from '../images/blog/vietnam-forest-trees.png';
import imgExportDocs from '../images/blog/export-documentation.png';

interface Article {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  isFeatured?: boolean;
  image: string;
  content?: React.ReactNode;
}

interface ArticleCardProps {
  article: Article;
  isLarge?: boolean;
  onClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, isLarge = false, onClick }) => (
  <div 
    onClick={onClick}
    className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full cursor-pointer"
  >
    {/* Image Area */}
    <div className={`w-full relative overflow-hidden border-b border-zinc-800 ${isLarge ? 'h-64' : 'h-48'}`}>
      <img 
        src={article.image} 
        alt={article.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      
      {/* Featured Badge */}
      {article.isFeatured && (
        <span className="absolute top-4 right-4 bg-amber-600/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
          Featured
        </span>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
    </div>

    <div className="p-8 flex flex-col flex-grow">
      {/* Category */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-zinc-300 border border-zinc-700 bg-zinc-800/50">
          {article.category}
        </span>
      </div>

      {/* Title */}
      <h3 className={`font-bold text-white mb-4 group-hover:text-emerald-500 transition-colors ${isLarge ? 'text-2xl' : 'text-xl'}`}>
        {article.title}
      </h3>

      {/* Summary */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
        {article.summary}
      </p>

      {/* Meta & Action */}
      <div className="flex items-center justify-between pt-6 border-t border-zinc-800 mt-auto">
        <div className="flex items-center space-x-4 text-xs text-zinc-500">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1.5" />
            {article.date}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1.5" />
            {article.readTime}
          </div>
        </div>
        
        <button className="flex items-center text-emerald-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
          Read More
          <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  </div>
);

const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const featuredArticles: Article[] = [
    {
      id: 1,
      title: "Guide to Choosing High-Quality Charcoal for Your Needs",
      summary: "Selecting good charcoal not only improves cooking efficiency but also ensures safety. Learn about wood types, hardness, moisture, and key indicators of premium charcoal.",
      category: "Buying Guide",
      date: "Jan 15, 2024",
      readTime: "8 min",
      isFeatured: true,
      image: imgGuideChoosing,
      content: (
        <>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            Selecting good charcoal not only improves cooking or production efficiency but also helps save costs and ensures safety for users. Below are key criteria to consider when choosing high-quality charcoal.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. Choose the right wood type</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            Charcoal made from hardwoods such as eucalyptus, cinnamon, coffee wood, or acacia tends to burn longer, produce less smoke, and generate higher heat. This makes it ideal for BBQ restaurants, pottery kilns, bakeries, or export businesses.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. Check hardness and weight</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            Good charcoal has a solid surface, produces a clear “tanh” sound when tapped, and does not crumble easily. High-quality charcoal is lightweight but firm, indicating proper carbonization and low ash content.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. Moisture and ash levels</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            Premium charcoal should be dry and free from mold. When burned, it should leave minimal ash, helping maintain stable heat and keep the workspace clean. You can break a piece to check for dryness and brittleness.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">4. Odor and smoke when testing</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            High-quality charcoal should have almost no unusual smell. When lit, it should produce very little white smoke. Excessive smoke indicates impurities or incomplete carbonization.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">5. Clear origin and trusted suppliers</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            Choose a reputable supplier with traceable wood sources and a standardized production process. This is especially important for export purposes or use in the F&B industry.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: "Charcoal Market Overview: Key Trends and Growth Opportunities",
      summary: "Explore the rapidly expanding global charcoal market, Vietnam's role as a key supplier, and the growing demand for green trends and biochar.",
      category: "Industry Insights",
      date: "Jan 10, 2024",
      readTime: "6 min",
      isFeatured: true,
      image: imgMarketOverview,
      content: (
        <>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            The charcoal market is rapidly expanding as global demand rises in BBQ restaurants, F&B, bakeries, pottery kilns, and industries seeking cleaner fuel options. High-quality products such as charcoal, hardwood charcoal, and lump charcoal are preferred for their strong heat output, low smoke, and sustainability.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. Growing global demand</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            Consumers in Japan, South Korea, Europe, and the Middle East are seeking reliable supplies of natural charcoal that meet environmental standards. This creates significant opportunities for Asian producers.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. Vietnam as a key supplier</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            Thanks to abundant wood resources, competitive production costs, and an extensive coastline, Vietnam has become one of the leading exporters in the global charcoal market.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. Green trend and biochar growth</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            The shift toward clean energy is driving demand for biochar, a by-product that improves soil health and reduces carbon emissions. This is one of the fastest-growing segments in the charcoal industry.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">4. Quality and certification challenges</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            International buyers require traceable wood sources, clean production processes, and consistent quality. Companies that meet FSC standards and invest in modern technology will gain long-term competitive advantages.
          </p>
        </>
      )
    }
  ];

  const recentArticles: Article[] = [
    {
      id: 3,
      title: "Popular Types of Charcoal: A Complete Guide",
      summary: "From Lump Charcoal to Briquettes and White Charcoal—understand the different types, their benefits, and best applications for BBQ, industry, and agriculture.",
      category: "Product Guide",
      date: "Jan 5, 2024",
      readTime: "7 min",
      image: imgPopularTypes,
      content: (
        <>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            The global charcoal market offers a wide range of products designed for cooking, industrial use, and sustainable agriculture. Each type of charcoal delivers different benefits in terms of heat output, burn time, smoke level, and environmental impact. Here is an overview of the most popular charcoal types used today.
          </p>
          
          <div className="border-l-4 border-emerald-500 pl-6 my-8">
            <h3 className="text-xl font-bold text-white mb-2">1. Lump Charcoal (Natural Hardwood Charcoal)</h3>
            <p className="mb-3 text-zinc-300">Lump charcoal is made by carbonizing natural hardwoods such as eucalyptus, acacia, coffee wood, and cinnamon.</p>
            <ul className="list-disc ml-5 text-zinc-300 space-y-1">
              <li>High heat output</li>
              <li>Low smoke, natural aroma</li>
              <li>Lights quickly and burns clean</li>
              <li>Ideal for BBQ restaurants, grilling, bakeries, and pottery kilns</li>
            </ul>
            <p className="mt-3 text-zinc-400 text-sm italic">It is the most widely used charcoal type worldwide.</p>
          </div>
          
          <div className="border-l-4 border-emerald-500 pl-6 my-8">
            <h3 className="text-xl font-bold text-white mb-2">2. Charcoal Briquettes</h3>
            <p className="mb-3 text-zinc-300">Charcoal briquettes are produced by compressing sawdust and wood residues and carbonizing them in modern kilns.</p>
            <ul className="list-disc ml-5 text-zinc-300 space-y-1">
              <li>Uniform size and shape</li>
              <li>Very long burn time</li>
              <li>Low ash, clean, and consistent</li>
              <li>Excellent for restaurants, commercial kitchens, and exports</li>
            </ul>
            <p className="mt-3 text-zinc-400 text-sm italic">Briquettes are a top choice in international markets due to stability and efficiency.</p>
          </div>
          
          <div className="border-l-4 border-emerald-500 pl-6 my-8">
            <h3 className="text-xl font-bold text-white mb-2">3. White Charcoal</h3>
            <p className="mb-3 text-zinc-300">A premium charcoal made from dense hardwoods such as oak or old eucalyptus.</p>
            <ul className="list-disc ml-5 text-zinc-300 space-y-1">
              <li>Extremely high heat</li>
              <li>Very long burn duration</li>
              <li>Almost no smoke and no sparks</li>
              <li>Commonly used in Japanese and Korean BBQ, water filtration, and air purification</li>
            </ul>
            <p className="mt-3 text-zinc-400 text-sm italic">Often called the “king of charcoal” because of its superior performance.</p>
          </div>
          
          <div className="border-l-4 border-emerald-500 pl-6 my-8">
            <h3 className="text-xl font-bold text-white mb-2">4. Biochar (Agricultural Charcoal)</h3>
            <p className="mb-3 text-zinc-300">Biochar is produced through pyrolysis and is increasingly used in sustainable farming.</p>
            <ul className="list-disc ml-5 text-zinc-300 space-y-1">
              <li>Improves soil structure</li>
              <li>Retains moisture and nutrients</li>
              <li>Helps reduce greenhouse gases</li>
              <li>Supports organic agriculture and carbon-negative farming</li>
            </ul>
            <p className="mt-3 text-zinc-400 text-sm italic">Biochar is one of the fastest-growing categories in the charcoal industry.</p>
          </div>
          
          <div className="border-l-4 border-zinc-700 pl-6 my-8">
            <h3 className="text-xl font-bold text-white mb-2">5. Traditional Honeycomb Charcoal</h3>
            <p className="mb-3 text-zinc-300">Previously common for household cooking.</p>
            <ul className="list-disc ml-5 text-zinc-300 space-y-1">
              <li>Low cost</li>
              <li>Easy to use</li>
            </ul>
            <p className="mt-3 text-zinc-400 text-sm italic">However, it produces more smoke and emissions, so it is now less popular.</p>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-10">Conclusion</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            From lump charcoal for BBQ, briquette charcoal for commercial kitchens, white charcoal for premium grilling, to biochar for sustainable agriculture — today’s charcoal market is diverse and evolving toward cleaner, greener solutions. Choosing the right charcoal depends on your intended use, quality expectations, and environmental goals.
          </p>
        </>
      )
    },
    {
      id: 4,
      title: "Vietnam’s Forest Trees: Diversity and Natural Value",
      summary: "Discover the botanical diversity of Vietnam's forests, the economic value of key timber species, and their vital environmental importance.",
      category: "Nature & Ecology",
      date: "Dec 20, 2023",
      readTime: "5 min",
      image: imgVietnamForests,
      content: (
        <>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            Vietnam is one of the most botanically diverse countries in Southeast Asia. Thanks to its tropical climate and varied landscapes, the nation’s forests contain thousands of unique tree species, from valuable hardwoods to natural medicinal plants.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. Forest Diversity</h3>
          <p className="mb-4 text-zinc-300">Key forest types include:</p>
          <ul className="list-disc ml-5 text-zinc-300 space-y-2 mb-6">
            <li><strong className="text-white">Evergreen tropical forests:</strong> redwood, rosewood, black star.</li>
            <li><strong className="text-white">Mangrove forests:</strong> mangrove, nipa palm, and shoreline species that protect coastal areas.</li>
            <li><strong className="text-white">Bamboo forests:</strong> supplying raw materials for crafts and construction.</li>
            <li><strong className="text-white">High-altitude coniferous forests:</strong> pine and po mu.</li>
          </ul>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. Economic & Cultural Value</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            Forest trees provide timber, medicinal herbs, and export materials such as acacia, cinnamon, star anise, and bamboo. Many species also play an important role in Vietnamese culture, such as the banyan tree and bodhi tree.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. Environmental Importance</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            Trees help absorb CO₂, protect soil, maintain water sources, and support wildlife habitats—playing a key role in climate change mitigation.
          </p>
        </>
      )
    },
    {
      id: 5,
      title: "Export Documentation Made Simple: Shipping Charcoal Internationally",
      summary: "Navigate customs requirements, phytosanitary certificates, and container specifications for smooth charcoal imports. A practical guide for first-time importers.",
      category: "Logistics",
      date: "Dec 15, 2023",
      readTime: "10 min",
      image: imgExportDocs,
      content: (
        <>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            Charcoal is classified as a dangerous good (DG) in many shipping contexts due to its flammability (spontaneous combustion risk). Therefore, exporting charcoal requires precise documentation and adherence to international maritime safety standards (IMDG Code). Below is the essential checklist for importers and exporters.
          </p>

          <img 
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop" 
            alt="Shipping Containers at Port" 
            className="w-full h-64 md:h-80 object-cover rounded-xl mb-8 border border-zinc-800"
          />

          <h3 className="text-2xl font-bold text-white mb-4">1. Commercial Invoice & Packing List</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            These are the foundational documents for any trade. The Commercial Invoice details the value and description of goods, while the Packing List specifies the net/gross weight, number of bags, and pallet configuration. Precision here prevents customs delays at the destination port.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">2. Material Safety Data Sheet (MSDS)</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
             This is critical for charcoal. The MSDS proves that the charcoal has been tested for self-heating properties. Shipping lines require this to accept the booking. It confirms whether the charcoal is classified as <strong>Class 4.2 (Spontaneously Combustible)</strong> or non-hazardous.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">3. Bill of Lading (B/L)</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            The legal contract of carriage. For charcoal, it’s vital to ensure the HS Code (usually 4402) is correct and the description matches the MSDS exactly.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">4. Certificate of Origin (C/O)</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
            Issued by the Vietnamese Chamber of Commerce or government bodies. This document certifies the goods originate in Vietnam, which can be crucial for claiming tax exemptions under Free Trade Agreements (FTAs) like EVFTA (Europe) or VJEPA (Japan).
          </p>

          <div className="bg-zinc-800/50 p-6 rounded-xl border-l-4 border-emerald-500 my-8">
            <h4 className="text-lg font-bold text-white mb-2">Pro Tip: Vanning Certificate</h4>
            <p className="text-zinc-400 text-sm">
              Some strict ports require a "Vanning Certificate" or "Survey Report" issued by a third party (like SGS) to prove the temperature of the charcoal was safe at the time of loading into the container.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">5. Phytosanitary Certificate</h3>
          <p className="mb-6 text-zinc-300 leading-relaxed">
             Since charcoal is a wood product, this certificate confirms the shipment has been treated and is free from pests/insects. This is mandatory for entry into most countries to protect their local ecosystem.
          </p>
        </>
      )
    }
  ];

  // Detail View
  if (selectedArticle) {
    return (
      <div className="bg-zinc-950 min-h-screen py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button 
            onClick={() => setSelectedArticle(null)}
            className="flex items-center text-zinc-400 hover:text-emerald-500 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </button>

          <article className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
            
            {/* Article Hero Image */}
            <div className="w-full h-80 relative">
               <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
            </div>

            <div className="p-8 md:p-12 -mt-20 relative">
                {/* Article Header */}
                <div className="mb-10 border-b border-zinc-800 pb-10">
                <div className="flex flex-wrap gap-4 mb-6">
                    <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                    {selectedArticle.category}
                    </span>
                    <div className="flex items-center text-zinc-300 text-sm backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
                    <Calendar size={16} className="mr-2" />
                    {selectedArticle.date}
                    </div>
                    <div className="flex items-center text-zinc-300 text-sm backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
                    <Clock size={16} className="mr-2" />
                    {selectedArticle.readTime} read
                    </div>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                    {selectedArticle.title}
                </h1>
                
                <p className="text-xl text-zinc-400 leading-relaxed font-light">
                    {selectedArticle.summary}
                </p>
                </div>

                {/* Article Content */}
                <div className="prose prose-invert prose-emerald max-w-none">
                {selectedArticle.content}
                </div>
            </div>

          </article>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="bg-zinc-950 min-h-screen py-20 animate-fade-in">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog & Resources</h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Industry insights, product guides, and sustainability stories from the charcoal trade
        </p>
      </div>

      {/* Featured Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticles.map(article => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              isLarge={true}
              onClick={() => {
                setSelectedArticle(article);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </div>

      {/* Recent Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map(article => (
            <ArticleCard 
              key={article.id} 
              article={article}
              onClick={() => {
                setSelectedArticle(article);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Blog;