import { motion, useScroll, useTransform } from "motion/react";
import "../styles/scrollbar.css";
import { Button } from "./ui/button";
import { Sparkles, CalendarCheck, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const studentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-[#F9FAFB]">
      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/90 via-[#3B82F6]/85 to-[#60A5FA]/80 z-[1]" />
      
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572893238289-205353f1b537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2xhc3Nyb29tJTIwY29sb3JmdWwlMjBicmlnaHR8ZW58MXx8fHwxNzYyODI2NjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center" />
      </motion.div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-[1] opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Modern Floating Shapes */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#FACC15]/30 to-[#F59E0B]/20 rounded-[3rem] blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-white/20 to-[#60A5FA]/30 rounded-[4rem] blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-[#FACC15]/20 to-transparent rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            style={{ opacity }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full mb-8"
            >
              <div className="w-2 h-2 bg-[#FACC15] rounded-full animate-pulse" />
              <span className="text-white/90 text-sm">Welcome to BrightFuture Academy</span>
              <Sparkles className="w-4 h-4 text-[#FACC15]" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
            >
              Where Curiosity
              <br />
              <span className="bg-gradient-to-r from-[#FACC15] to-[#FDE047] bg-clip-text text-transparent">
                Becomes Knowledge
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed"
            >
              A joyful learning environment built to inspire every child and unlock their limitless potential.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="group bg-[#FACC15] hover:bg-[#FDE047] text-[#1E293B] px-8 py-7 rounded-2xl shadow-2xl hover:shadow-[#FACC15]/50 transition-all hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-[#2563EB] px-8 py-7 rounded-2xl shadow-xl transition-all hover:scale-105"
              >
                <CalendarCheck className="w-5 h-5 mr-2" />
                Book a Visit
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-8"
            >
              {[
                { number: "15+", label: "Years" },
                { number: "500+", label: "Students" },
                { number: "98%", label: "Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Graduated Students Images */}
          <motion.div
            style={{ y: studentY }}
            className="relative hidden lg:block"
          >
            {/* Main Student Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 3 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative z-10"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <ImageWithFallback
                  src="https://media.istockphoto.com/id/1498161814/photo/little-girl-drawing-with-markers-at-the-nursery.jpg?s=612x612&w=0&k=20&c=0YnnZBAPiO74BxQPx3hMa6f2ipQpolqSHofMikjU0kQ="
                  alt="Middle school students learning together"
                  className="w-full h-[600px] object-cover"
                />
                {/* Success Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-2xl">🎓</div>
                    <span className="text-[#1E293B]">Our Students</span>
                  </div>
                  <p className="text-xs text-[#64748B]">Middle School Excellence</p>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl">
                  <p className="text-sm text-[#1E293B] mb-3">
                    "I love learning at BrightFuture!"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#60A5FA] flex items-center justify-center text-white">
                        A+
                      </div>
                      <div>
                        <p className="text-xs text-[#1E293B]">Top Students</p>
                        <p className="text-xs text-[#64748B]">Academic Excellence</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#FACC15]">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Achievement Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -left-8 top-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl max-w-[200px] z-20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981] to-[#34D399] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#64748B]">Graduation Rate</p>
                  <p className="text-lg text-[#1E293B]">100%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -right-8 bottom-32 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#FACC15] flex items-center justify-center">
                  <span className="text-lg">🏆</span>
                </div>
                <div>
                  <p className="text-xs text-[#64748B]">Awards Won</p>
                  <p className="text-lg text-[#1E293B]">50+</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FACC15]/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-[3]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path fill="#F9FAFB" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}