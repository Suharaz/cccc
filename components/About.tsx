import React, { useEffect, useState, useRef } from 'react';
import { Building2, Globe, Users, Award, Target, Heart, CheckCircle } from 'lucide-react';

// Custom hook for intersection observer
const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 } // Trigger when 10% visible
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const onScreen = useOnScreen(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (onScreen && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number | null = null;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuad = (t: number) => t * (2 - t);
        
        setCount(Math.floor(easeOutQuad(progress) * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [onScreen, end, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen py-20 animate-fade-in">
      
      {/* 1. HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About GLOBAL EX</h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Premium natural charcoal supplier from Vietnam, trusted by businesses worldwide
        </p>
      </div>

      {/* 2. OUR STORY & STATS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Story Text */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
            <div className="text-zinc-400 text-lg space-y-6 leading-relaxed">
              <p>
                Founded in 2023, <strong className="text-white">GLOBAL EX COMPANY LIMITED</strong> began with a simple mission: to share Vietnam's exceptional natural charcoal with the world while protecting our forests and communities.
              </p>
              <p>
                GLOBAL EX was established with a mission to deliver Vietnam’s finest natural charcoal to the world through responsible sourcing and modern, sustainable production. With many years of experience in growing timber trees, The founder built GLOBAL EX on deep market insight, strict quality control, and a long-term commitment to global clients.
              </p>
              <p>
                Supported by Vietnam’s strategic export infrastructure and coastal logistics, we are proud to contribute to a national charcoal export industry valued at over <strong className="text-emerald-400">USD 400 million</strong> annually.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-emerald-500/30 transition-colors">
              <div className="p-3 bg-zinc-800 rounded-xl text-emerald-500 mb-4">
                <Building2 />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Founded
              </h3>
              <p className="text-zinc-500 text-sm">2023</p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-emerald-500/30 transition-colors">
              <div className="p-3 bg-zinc-800 rounded-xl text-emerald-500 mb-4">
                <Globe />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                <AnimatedCounter end={25} suffix="+" />
              </h3>
              <p className="text-zinc-500 text-sm">Export Markets</p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-emerald-500/30 transition-colors">
              <div className="p-3 bg-zinc-800 rounded-xl text-emerald-500 mb-4">
                <Users />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                 <AnimatedCounter end={50} suffix="+" />
              </h3>
              <p className="text-zinc-500 text-sm">Team Members</p>
            </div>

             <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-emerald-500/30 transition-colors">
              <div className="p-3 bg-zinc-800 rounded-xl text-emerald-500 mb-4">
                <Award />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">ISO & SGS</h3>
              <p className="text-zinc-500 text-sm">Certifications</p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. OUR VALUES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <Target />, 
              title: "Quality First", 
              desc: "Every batch is hand-sorted and tested to meet international standards" 
            },
            { 
              icon: <Heart />, 
              title: "Sustainability", 
              desc: "Committed to eco-friendly practices from forest to final product" 
            },
            { 
              icon: <Users />, 
              title: "Customer Focus", 
              desc: "Building long-term partnerships through reliable service and support" 
            },
            { 
              icon: <Globe />, 
              title: "Global Reach", 
              desc: "Serving customers in 25+ countries with consistent quality" 
            }
          ].map((value, idx) => (
            <div key={idx} className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-900/50 transition-colors">
              <div className="p-3 bg-zinc-800/80 w-fit rounded-xl text-emerald-500 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. OUR JOURNEY */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Our Journey</h2>
        <div className="relative pl-8 md:pl-0">
          {/* Timeline vertical line */}
          <div className="absolute left-4 top-0 bottom-0 md:left-1/2 md:-translate-x-1/2 border-l border-emerald-700/40 pointer-events-none" />

          <div className="space-y-10">
          {[
            { year: "2023", event: "Company founded in Hanoi", type: "past" },
            { year: "2028", event: "Targeting expanded to 10+ export markets", type: "future" },
            { year: "2033", event: "Targeting 2000+ tons annual capacity", type: "target" },
          ].map((milestone, idx) => {
            const isTarget = milestone.type === "target";
            return (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group transition-transform duration-500 ease-out"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {/* Year + dot on the line */}
                <div className="flex items-center md:justify-center md:w-1/3">
                  <div className="relative flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 shadow-[0_0_0_4px] ${
                      isTarget
                        ? 'bg-emerald-400 border-emerald-200 shadow-emerald-400/40 animate-pulse'
                        : 'bg-emerald-500 border-emerald-300 shadow-emerald-500/20'
                    }`} />
                    <span className={`ml-4 md:ml-6 font-semibold py-1.5 px-5 rounded-full text-sm tracking-wide shadow-lg shadow-emerald-900/30 group-hover:bg-emerald-600 transition-colors ${
                      isTarget ? 'bg-emerald-500 text-black' : 'bg-emerald-700 text-white'
                    }`}>
                      {milestone.year}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="md:w-2/3">
                  <div className={`rounded-2xl p-6 md:p-8 text-lg leading-relaxed shadow-lg shadow-black/20 transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-emerald-900/40 ${
                    isTarget
                      ? 'bg-gradient-to-r from-emerald-900/60 to-zinc-900 border border-emerald-500/60 text-zinc-100'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:border-emerald-500/40'
                  }`}>
                    {isTarget && (
                      <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                        <Target size={18} />
                        <span>Long-term Target</span>
                      </div>
                    )}
                    <p>{milestone.event}</p>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      {/* 5. CERTIFICATIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Certifications & Standards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "ISO 9001:2015 Quality Management",
            "SGS Product Certification",
            "FSC Chain of Custody",
            "Export License Vietnam"
          ].map((cert, idx) => (
            <div key={idx} className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col items-center text-center hover:border-emerald-500/30 transition-colors">
              <CheckCircle size={40} className="text-emerald-500 mb-6" strokeWidth={1.5} />
              <p className="text-white font-semibold text-sm">{cert}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. LOCATION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Our Location</h2>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">GLOBAL EX COMPANY LIMITED</h3>
            <div className="flex flex-col items-center justify-center text-zinc-400 space-y-2">
              <p>Village 7, Bat Trang Commune</p>
              <p>Ha Noi City, Vietnam</p>
            </div>
          </div>
          {/* Background accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-0"></div>
        </div>
      </div>

    </div>
  );
};

export default About;