import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Globe2, Shield, Heart, Laptop } from "lucide-react";

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Globe2 className="w-10 h-10" />,
      title: "Bilingual Education",
      description: "Fluency in Arabic, French, and English to prepare students for global opportunities.",
      color: "bg-[#2563EB]"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Safe & Creative Environment",
      description: "Modern facilities designed for safety, exploration, and joyful learning experiences.",
      color: "bg-[#10B981]"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Passionate Teachers",
      description: "Dedicated educators who inspire, mentor, and care deeply about each child's success.",
      color: "bg-[#F59E0B]"
    },
    {
      icon: <Laptop className="w-10 h-10" />,
      title: "Tech-Integrated Learning",
      description: "Smart classrooms and digital tools that enhance engagement and prepare for the future.",
      color: "bg-[#8B5CF6]"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-[#F9FAFB] to-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-10 w-64 h-64 bg-[#FACC15]/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#2563EB]/10 text-[#2563EB] px-4 py-2 rounded-full mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#1E293B] mb-6">
            Why Parents Choose BrightFuture
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            We create an exceptional educational experience that goes beyond academics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-5xl text-[#10B981]">✅</span>
                    <h3 className="text-2xl text-[#1E293B] mt-2">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#64748B] text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute -bottom-4 -right-4 w-32 h-32 ${feature.color} opacity-5 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "15+", label: "Years Experience" },
            { number: "500+", label: "Happy Students" },
            { number: "98%", label: "Parent Satisfaction" },
            { number: "30+", label: "Expert Teachers" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl text-[#2563EB] mb-2">
                {stat.number}
              </div>
              <div className="text-[#64748B]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
