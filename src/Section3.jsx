import React, { useState } from "react";
import Lottie from "lottie-react";
import webdesign from "./assets/webdesign.json";
import { Globe, Smartphone, Palette, ShoppingBag, Cloud, BarChart, Layers, Users } from "lucide-react";

const Section3 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const colors = {
    bg: "#0d1e4c",
    gradientFrom: "#142a63",
    gradientTo: "#83a6ce",
  };

  const services = [
    { title: "Web Development", description: "Websites, Web Apps, CMS solutions", icon: Globe, color: "from-blue-400 to-cyan-400" },
    { title: "Mobile App Development", description: "Android, iOS, Hybrid apps", icon: Smartphone, color: "from-purple-400 to-pink-400" },
    { title: "UI/UX Design", description: "Creative, user-friendly, responsive designs", icon: Palette, color: "from-pink-400 to-rose-400" },
    { title: "E-commerce Solutions", description: "Online stores, payment integrations", icon: ShoppingBag, color: "from-orange-400 to-yellow-400" },
    { title: "Cloud & Hosting", description: "Deployment, scaling, management", icon: Cloud, color: "from-cyan-400 to-blue-500" },
    { title: "Digital Marketing", description: "SEO, SEM, Social Media, Branding", icon: BarChart, color: "from-green-400 to-teal-400" },
    { title: "Software Development", description: "Custom ERP, CRM, automation tools", icon: Layers, color: "from-indigo-400 to-purple-500" },
    { title: "IT Consulting", description: "Strategy, system integration, support", icon: Users, color: "from-violet-400 to-fuchsia-400" },
  ];

  return (
    <section
      className="relative py-12 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.gradientFrom} 0%, ${colors.bg} 50%, ${colors.gradientTo} 100%)`,
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Floating Decorative Shapes */}
      <svg className="absolute top-20 right-32 w-20 h-20 opacity-30" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#a78bfa" strokeWidth="2">
          <animate attributeName="r" values="35;45;35" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>

      <svg className="absolute top-1/4 right-20 w-16 h-16 opacity-25" viewBox="0 0 100 100">
        <path d="M50,10 L90,90 L10,90 Z" fill="#ec4899" opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="25s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      <svg className="absolute bottom-1/3 left-20 w-14 h-14 opacity-25" viewBox="0 0 100 100">
        <rect x="25" y="25" width="50" height="50" fill="#06b6d4" opacity="0.5" rx="8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="20s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>

      {/* Multiple Small Circles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-10"
          style={{
            width: `${Math.random() * 60 + 40}px`,
            height: `${Math.random() * 60 + 40}px`,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 90 + 5}%`,
            animation: `float ${5 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-white mb-4">
            Services <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Offered</span>
          </h2>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
            <svg className="w-2 h-2" viewBox="0 0 10 10">
              <circle cx="5" cy="5" r="5" fill="#a78bfa"/>
            </svg>
            <div className="w-32 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"></div>
            <svg className="w-2 h-2" viewBox="0 0 10 10">
              <circle cx="5" cy="5" r="5" fill="#60a5fa"/>
            </svg>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Innovative digital solutions designed to empower your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left: Lottie Animation */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative Ring with Animation */}
              <div className="absolute -inset-1 rounded-full border-2 border-dashed border-purple-400/20 animate-spin-slow"></div>
              <div className="absolute -inset-4 rounded-full border border-dashed border-blue-400/15" style={{ animation: 'spin 40s linear infinite reverse' }}></div>

              {/* Decorative Stars/Dots Around */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i % 2 === 0 ? '#a78bfa' : '#ec4899',
                    top: `${50 + 42 * Math.sin((angle * Math.PI) / 180)}%`,
                    left: `${50 + 42 * Math.cos((angle * Math.PI) / 180)}%`,
                    animation: `pulse ${2 + (i * 0.2)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}

              {/* Main Container */}
              <div className="relative w-[220px] h-[220px] rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl"></div>
                <Lottie animationData={webdesign} loop autoplay className="relative z-10" />
              </div>

              {/* Corner Accents */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-pink-400/50 rounded-tl-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-blue-400/50 rounded-br-lg"></div>
            </div>
          </div>

          {/* Right: Services Grid */}
          <div className="grid grid-cols-2 gap-5">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isHovered = hoveredCard === idx;

              return (
                <div
                  key={idx}
                  className="group relative p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/15 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                    boxShadow: isHovered ? '0 20px 60px rgba(139, 92, 246, 0.3)' : '0 10px 30px rgba(0,0,0,0.2)',
                  }}
                >
                  {/* Animated Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      style={{
                        animation: isHovered ? 'shine 2s ease-in-out' : 'none',
                      }}
                    />
                  </div>

                  {/* Icon */}
                  <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg mb-4 transition-all duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
                    <Icon className="w-4 h-4" strokeWidth={2.5} />
                    <div className="absolute inset-0 rounded-xl bg-white/30 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="relative text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="relative text-sm text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 group-hover:w-full transition-all duration-700"></div>

                  {/* Corner Decoration */}
                  <svg className="absolute top-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity duration-300" viewBox="0 0 24 24">
                    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" className="text-purple-300">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 12 12"
                        to="360 12 12"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Section3;