import React, { useState, useEffect, useRef } from "react";
import { Users, DollarSign, Clock, Headphones, Cog, Sparkles, Zap, Award, Target, TrendingUp } from "lucide-react";
import Lottie from "lottie-react";
import machineLearning from "./assets/machine-learning.gif";
import singingcontract from "./assets/singingcontract.json";

const Section2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const colors = {
    primary: '#142a63',
    secondary: '#c997b9',
    tertiary: '#edd5e0',
    accent: '#90b5d8',
    dark: '#325078',
    darker: '#112340',
    lightBlue: '#b5cdea',
    surface: '#eaf0f8',
  };

  const features = [
    { icon: Users, text: "Skilled & experienced team", color: colors.secondary, desc: "Expert professionals" },
    { icon: DollarSign, text: "Affordable pricing", color: colors.accent, desc: "Best value guaranteed" },
    { icon: Clock, text: "On-time delivery", color: colors.lightBlue, desc: "Never miss deadlines" },
    { icon: Headphones, text: "24/7 support", color: colors.secondary, desc: "Always here for you" },
  ];

  const stats = [
    { icon: Award, value: "500+", label: "Projects Done" },
    { icon: Users, value: "300+", label: "Happy Clients" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen relative flex items-center py-20 px-4 overflow-hidden"
      style={{ backgroundColor: colors.surface }}
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl animate-mesh-1"
          style={{
            background: `radial-gradient(circle, ${colors.tertiary}, transparent)`,
            top: "10%",
            left: "5%",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl animate-mesh-2"
          style={{
            background: `radial-gradient(circle, ${colors.accent}40, transparent)`,
            bottom: "15%",
            right: "10%",
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full blur-3xl animate-mesh-3"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}30, transparent)`,
            top: "50%",
            left: "50%",
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Cog
          className="absolute animate-float-spin"
          style={{ 
            color: colors.accent + "40",
            width: '60px',
            height: '60px',
            top: '8%',
            left: '12%',
            transform: `translateY(${scrollProgress * 50}px)`,
          }}
        />
        <Sparkles
          className="absolute animate-twinkle"
          style={{ 
            color: colors.secondary + "50",
            width: '40px',
            height: '40px',
            top: '25%',
            right: '15%',
          }}
        />
        <Zap
          className="absolute animate-pulse-glow"
          style={{ 
            color: colors.primary + "30",
            width: '50px',
            height: '50px',
            bottom: '20%',
            left: '18%',
          }}
        />
        <Target
          className="absolute animate-rotate-slow"
          style={{ 
            color: colors.lightBlue + "40",
            width: '45px',
            height: '45px',
            top: '60%',
            right: '8%',
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Hero Header Section */}
        <div className="text-center mb-16 animate-fade-slide-down">
          <div className="inline-block mb-4">
            <div 
              className="px-6 py-2 rounded-full border-2 backdrop-blur-sm"
              style={{
                backgroundColor: colors.tertiary + "40",
                borderColor: colors.secondary,
              }}
            >
              <p className="text-sm font-bold" style={{ color: colors.primary }}>
                ✨ YOUR TRUSTED PARTNER
              </p>
            </div>
          </div>
          <h2 
            className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
            style={{ 
              color: colors.primary,
              textShadow: '0 4px 20px rgba(20, 42, 99, 0.15)',
            }}
          >
            WHY CHOOSE US?
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.dark }}>
            Experience excellence through innovation and dedication
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          
          {/* LEFT: Feature Cards Grid */}
          <div className="space-y-6">
            {/* Feature Cards - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className="relative p-6 rounded-2xl transition-all duration-700 border-2 h-full"
                    style={{
                      backgroundColor: hoveredIndex === idx ? item.color + "15" : "#ffffff",
                      borderColor: activeCard === idx ? item.color : "#e0e6f1",
                      transform: hoveredIndex === idx ? "translateY(-12px) scale(1.05)" : "translateY(0) scale(1)",
                      boxShadow: hoveredIndex === idx 
                        ? `0 20px 60px ${item.color}40` 
                        : '0 4px 20px rgba(0,0,0,0.06)',
                    }}
                  >
                    {/* Animated corner accent */}
                    <div 
                      className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl transition-all duration-500"
                      style={{
                        backgroundColor: item.color + (hoveredIndex === idx ? "30" : "10"),
                      }}
                    />
                    
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-700 relative z-10"
                      style={{
                        backgroundColor: item.color + "20",
                        transform: hoveredIndex === idx ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)",
                      }}
                    >
                      <item.icon
                        className="w-8 h-8 transition-all duration-500"
                        style={{ color: item.color }}
                      />
                    </div>
                    
                    <h3 
                      className="text-lg font-bold mb-2 transition-colors duration-300"
                      style={{ color: hoveredIndex === idx ? item.color : colors.primary }}
                    >
                      {item.text}
                    </h3>
                    <p className="text-sm" style={{ color: colors.dark + "CC" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Bar */}
            <div 
              className="rounded-2xl p-6 border-2 backdrop-blur-sm animate-fade-slide-up"
              style={{
                backgroundColor: "#ffffff",
                borderColor: colors.lightBlue,
                boxShadow: '0 10px 40px rgba(144, 181, 216, 0.2)',
              }}
            >
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center group cursor-pointer">
                    <div className="flex justify-center mb-2">
                      <stat.icon 
                        className="w-8 h-8 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" 
                        style={{ color: colors.accent }}
                      />
                    </div>
                    <div 
                      className="text-3xl font-extrabold mb-1 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: colors.primary }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium" style={{ color: colors.dark }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Showcase */}
          <div className="space-y-6 animate-fade-slide-left">
            {/* Main Hero Card with Animation */}
            <div 
              className="relative rounded-3xl p-8 border-2 group cursor-pointer"
              style={{
                backgroundColor: "#ffffff",
                borderColor: colors.accent,
                boxShadow: '0 20px 60px rgba(144, 181, 216, 0.3)',
              }}
            >
              {/* Animated glow effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
                style={{ backgroundColor: colors.accent + "40" }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1" style={{ color: colors.primary }}>
                      OUR BELIEF
                    </h3>
                    <p className="text-sm" style={{ color: colors.dark }}>
                      What drives us forward
                    </p>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-180"
                    style={{ backgroundColor: colors.secondary + "20" }}
                  >
                    <Sparkles className="w-6 h-6" style={{ color: colors.secondary }} />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden border-2 group-hover:scale-105 transition-transform duration-700"
                    style={{ borderColor: colors.lightBlue }}
                  >
                    <Lottie 
                      animationData={singingcontract} 
                      loop 
                      autoplay 
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-6" style={{ color: colors.dark }}>
                  We believe in{" "}
                  <span 
                    className="font-bold px-2 py-1 rounded inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
                    style={{ backgroundColor: colors.secondary + "20", color: colors.secondary }}
                  >
                    innovation
                  </span>
                  ,{" "}
                  <span 
                    className="font-bold px-2 py-1 rounded inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
                    style={{ backgroundColor: colors.accent + "20", color: colors.accent }}
                  >
                    reliability
                  </span>
                  {" "}and{" "}
                  <span 
                    className="font-bold px-2 py-1 rounded inline-block hover:scale-110 transition-transform duration-300 cursor-pointer"
                    style={{ backgroundColor: colors.primary + "10", color: colors.primary }}
                  >
                    customer success
                  </span>
                  {" "}– crafting meaningful digital experiences that transform businesses.
                </p>

                {/* Bottom Cards Row */}
                <div className="flex gap-4">
                  <div className="flex-1 group/card cursor-pointer">
                    <div 
                      className="relative rounded-xl overflow-hidden border-2 transition-all duration-500 group-hover/card:scale-105"
                      style={{ borderColor: colors.lightBlue }}
                    >
                      <img
                        src={machineLearning}
                        alt="Machine Learning"
                        className="w-full h-24 object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                      <div 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: colors.primary + "E6" }}
                      >
                        <p className="text-white font-bold text-sm">AI Powered</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div
                      className="px-4 py-3 rounded-xl border-2 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                      style={{
                        backgroundColor: colors.secondary + "10",
                        borderColor: colors.secondary,
                      }}
                    >
                      <p className="text-xs font-bold text-center" style={{ color: colors.secondary }}>
                        🤝 Client Collaboration
                      </p>
                    </div>
                    <div
                      className="px-4 py-3 rounded-xl border-2 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                      style={{
                        backgroundColor: colors.accent + "10",
                        borderColor: colors.accent,
                      }}
                    >
                      <p className="text-xs font-bold text-center" style={{ color: colors.accent }}>
                        🎧 Smooth Communication
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(-10px) scale(1.05); }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        @keyframes draw-line {
          0%, 100% { stroke-dashoffset: 0; }
          50% { stroke-dashoffset: 20; }
        }
        @keyframes draw-line-reverse {
          0%, 100% { stroke-dashoffset: 20; }
          50% { stroke-dashoffset: 0; }
        }
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.9); }
        }
        @keyframes mesh-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 25px) scale(1.05); }
          66% { transform: translate(25px, -25px) scale(0.95); }
        }
        @keyframes mesh-3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes float-spin {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; filter: drop-shadow(0 0 0 currentColor); }
          50% { opacity: 0.6; filter: drop-shadow(0 0 20px currentColor); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fade-slide-down {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-slide-left {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 6s ease-in-out infinite; }
        .animate-pulse-scale { animation: pulse-scale 3s ease-in-out infinite; }
        .animate-draw-line { animation: draw-line 4s ease-in-out infinite; }
        .animate-draw-line-reverse { animation: draw-line-reverse 5s ease-in-out infinite; }
        .animate-mesh-1 { animation: mesh-1 20s ease-in-out infinite; }
        .animate-mesh-2 { animation: mesh-2 25s ease-in-out infinite; }
        .animate-mesh-3 { animation: mesh-3 15s ease-in-out infinite; }
        .animate-float-spin { animation: float-spin 20s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotate-slow 30s linear infinite; }
        .animate-fade-slide-down { animation: fade-slide-down 0.8s ease-out; }
        .animate-fade-slide-up { animation: fade-slide-up 0.8s ease-out 0.6s backwards; }
        .animate-fade-slide-left { animation: fade-slide-left 0.8s ease-out 0.3s backwards; }
        .animate-scale-in { animation: scale-in 0.6s ease-out backwards; }
      `}</style>
    </div>
  );
};

export default Section2;