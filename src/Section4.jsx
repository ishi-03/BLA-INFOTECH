import React, { useEffect, useRef, useState } from 'react';
import { Cog, Sparkles, Zap, TrendingUp, ArrowRight, Check } from 'lucide-react';
import lottie from "lottie-web";
import budget from "./assets/budget.json";
const Section4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Load Lottie animation
 useEffect(() => {
  if (lottieRef.current) {
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: budget,
    });

    return () => anim.destroy(); // cleanup when component unmounts
  }
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

  const plans = [
    {
      name: 'Basic Plan',
      price: '₹12,000',
      features: [
        'Static Website (3–5 pages)',
        '3 Months Free Support',
        'Responsive & User-friendly Design'
      ],
      color: colors.accent,
      delay: '0s'
    },
    {
      name: 'Premium Plan',
      price: '₹25,000',
      features: [
        'Static Website (8–10 pages)',
        '6 Months Free Support',
        'Responsive & User-friendly Design'
      ],
      color: colors.secondary,
      delay: '0.1s'
    },
    {
      name: 'ECommerce',
      price: '₹25K-35K',
      popular: true,
      features: [
        'Full E-commerce Store Setup',
        'Payment Gateway Integration',
        'Product Listings & Categories',
        'Order Management System',
        'Responsive Mobile-friendly Store'
      ],
      color: colors.secondary,
      delay: '0.2s'
    }
  ];

  const addOns = [
    { icon: '🌐', title: 'Hosting Charges', desc: 'yearly (as per plan)' },
    { icon: '📈', title: 'SEO Services', desc: 'on-page + off-page optimization' },
    { icon: '📱', title: 'Digital Marketing', desc: 'Social Media, Ads, Branding' },
    { icon: '🔧', title: 'Extra Maintenance', desc: 'beyond included period' },
    { icon: '✨', title: 'Animations / Advanced UI', desc: 'custom pricing' },
    { icon: '📲', title: 'Mobile App Development', desc: 'Android / iOS / Hybrid' }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen py-12 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${colors.surface} 0%, ${colors.tertiary} 50%, ${colors.lightBlue} 100%)` }}>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full animate-float"
          style={{ background: `radial-gradient(circle, ${colors.secondary}30, transparent)` }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full animate-float"
          style={{ background: `radial-gradient(circle, ${colors.accent}30, transparent)`, animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-40 w-20 h-20 rounded-full animate-float"
          style={{ background: `radial-gradient(circle, ${colors.secondary}25, transparent)`, animationDelay: '2s' }}></div>

        <Sparkles className="absolute top-32 right-32 w-5 h-5 animate-pulse opacity-40" style={{ color: colors.secondary }} />
        <Zap className="absolute top-60 left-20 w-4 h-4 animate-bounce opacity-30" style={{ color: colors.accent, animationDelay: '0.5s' }} />
        <TrendingUp className="absolute bottom-60 right-40 w-6 h-6 animate-pulse opacity-40" style={{ color: colors.secondary, animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ background: `${colors.secondary}30` }}>
            <span className="text-xs font-bold" style={{ color: colors.primary }}>💰 PRICING PLANS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight" style={{ color: colors.primary }}>
            Flexible Pricing Plans<br />
            <span style={{ color: colors.secondary }}>Designed For Every Business</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: colors.dark }}>
            Choose the perfect plan that fits your needs and budget
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ background: `linear-gradient(90deg, ${colors.secondary}, ${colors.accent})` }}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Plans */}
          <div className="space-y-4">
            {/* Pricing Cards */}
            {plans.map((plan, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-5 rounded-2xl backdrop-blur-sm transition-all duration-500 cursor-pointer ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
                style={{
                  background: plan.popular
                    ? `linear-gradient(135deg, ${colors.tertiary}ee, ${colors.lightBlue}ee)`
                    : `${colors.surface}ee`,
                  boxShadow: hoveredCard === index
                    ? `0 20px 60px ${plan.color}40`
                    : '0 10px 30px rgba(0,0,0,0.08)',
                  transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  border: plan.popular ? `3px solid ${colors.secondary}` : 'none',
                  animationDelay: plan.delay
                }}>

                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white animate-pulse"
                      style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` }}>
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold" style={{ color: colors.secondary }}>
                        {plan.price}
                      </span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transform transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${plan.color}40, ${plan.color}20)`,
                      transform: hoveredCard === index ? 'rotate(12deg) scale(1.1)' : 'rotate(0) scale(1)'
                    }}>
                    <Sparkles className="w-6 h-6" style={{ color: plan.color }} />
                  </div>
                </div>

                <ul className="space-y-3 mb-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}
                      className="flex items-start gap-2.5 transition-all duration-300"
                      style={{
                        transform: hoveredCard === index ? 'translateX(8px)' : 'translateX(0)',
                        transitionDelay: `${idx * 50}ms`
                      }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 animate-pulse"
                        style={{ background: `${colors.secondary}30` }}>
                        <Check className="w-3 h-3" style={{ color: colors.primary }} />
                      </div>
                      <span className="text-sm flex-1" style={{ color: colors.dark }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 group text-sm"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.dark})`,
                    transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                  }}>
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </div>
            ))}


          </div>

          {/* Right Column - Lottie Animation & Decorative Elements */}
          <div className={`relative min-h-[600px] rounded-2xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 50%, ${colors.accent} 100%)`,
              boxShadow: `0 30px 80px ${colors.primary}40`
            }}>

            {/* Lottie Animation */}
<div 
  ref={lottieRef} 
  className="absolute inset-0 flex items-center justify-center p-8 z-10"
  style={{ transform: 'translateY(120px)' }} // move animation down by 80px
></div>
   {/* Add-ons Section */}
            <div className={`p-5 rounded-2xl backdrop-blur-sm transition-all duration-500 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
                 style={{ 
                   background: `linear-gradient(135deg, ${colors.surface}ee, ${colors.lightBlue}dd)`,
                   boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                   animationDelay: '0.3s'
                 }}>
              <h3 className="text-2xl font-bold mb-5" style={{ color: colors.primary }}>
                🎯 Additional Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {addOns.map((addon, idx) => (
                  <div key={idx} 
                       className="p-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                       style={{ background: `${colors.surface}cc` }}>
                    <div className="text-2xl mb-1.5">{addon.icon}</div>
                    <div className="font-bold mb-1 text-sm" style={{ color: colors.primary }}>
                      {addon.title}
                    </div>
                    <div className="text-xs" style={{ color: colors.dark }}>
                      {addon.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative Gears */}
            <Cog className="absolute top-6 right-8 w-16 h-16 opacity-15 animate-spin z-0"
              style={{ color: colors.tertiary, animationDuration: '20s' }} />
            <Cog className="absolute top-24 right-24 w-12 h-12 opacity-20 animate-spin z-0"
              style={{ color: colors.lightBlue, animationDuration: '15s', animationDirection: 'reverse' }} />
            <Cog className="absolute bottom-24 right-6 w-14 h-14 opacity-15 animate-spin z-0"
              style={{ color: colors.tertiary, animationDuration: '18s' }} />
            <Cog className="absolute bottom-12 left-6 w-12 h-12 opacity-20 animate-spin z-0"
              style={{ color: colors.lightBlue, animationDuration: '22s', animationDirection: 'reverse' }} />

            {/* Floating Currency Symbols */}
            <svg className="absolute top-20 left-10 w-14 h-14 animate-float opacity-30 z-0" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="35" fill={colors.secondary} />
              <text x="40" y="52" textAnchor="middle" fontSize="32" fill="white" fontWeight="bold">₹</text>
            </svg>

            <svg className="absolute top-1/3 right-16 w-12 h-12 animate-float opacity-25 z-0"
              style={{ animationDelay: '1s' }} viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="35" fill={colors.tertiary} />
              <text x="40" y="52" textAnchor="middle" fontSize="32" fill={colors.darker} fontWeight="bold">₹</text>
            </svg>

            <svg className="absolute bottom-1/3 left-12 w-14 h-14 animate-float opacity-30 z-0"
              style={{ animationDelay: '1.5s' }} viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="35" fill={colors.lightBlue} />
              <text x="40" y="52" textAnchor="middle" fontSize="32" fill="white" fontWeight="bold">₹</text>
            </svg>

            {/* Growth Chart */}
            <svg className="absolute bottom-12 left-8 w-40 h-32 animate-zoom opacity-40 z-0" viewBox="0 0 220 160">
              <rect x="20" y="100" width="35" height="50" rx="6" fill={colors.lightBlue} />
              <rect x="65" y="70" width="35" height="80" rx="6" fill={colors.tertiary} />
              <rect x="110" y="50" width="35" height="100" rx="6" fill={colors.secondary} />
              <rect x="155" y="25" width="35" height="125" rx="6" fill={colors.lightBlue} />
              <path d="M37 100 L82 70 L127 50 L172 25" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
              <circle cx="37" cy="100" r="6" fill="white" />
              <circle cx="82" cy="70" r="6" fill="white" />
              <circle cx="127" cy="50" r="6" fill="white" />
              <circle cx="172" cy="25" r="6" fill="white" />
            </svg>

            {/* Sparkle Effects */}
            {[...Array(6)].map((_, i) => (
              <svg key={i}
                className="absolute animate-pulse z-0"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 12}%`,
                  animationDelay: `${i * 0.3}s`,
                  opacity: 0.3
                }}
                width="10" height="10" viewBox="0 0 40 40">
                <path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="white" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }

        .animate-zoom {
          animation: zoom 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Section4;