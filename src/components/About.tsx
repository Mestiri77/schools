import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Heart, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Award className="w-8 h-8 text-[#2563EB]" />,
      title: "Academic Excellence",
      description: "Rigorous curriculum meeting international standards"
    },
    {
      icon: <Heart className="w-8 h-8 text-[#2563EB]" />,
      title: "Values-Based Learning",
      description: "Building character alongside knowledge"
    },
    {
      icon: <Target className="w-8 h-8 text-[#2563EB]" />,
      title: "Creative Development",
      description: "Fostering innovation and critical thinking"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://www.pagesjaunes.fr/media/newdam/26/92/2f/00/00/d8/f9/1e/e2/08/683426922f0000d8f91ee208/683426922f0000d8f91ee209.png"
                alt="Students learning with teacher"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-6 right-6 bg-[#FACC15] text-[#1E293B] px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold">Since 2010</span>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#2563EB] rounded-3xl -z-10 opacity-20" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FACC15] rounded-full -z-10 opacity-30" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block bg-[#2563EB]/10 text-[#2563EB] px-4 py-2 rounded-full mb-4">
              About Us
            </div>
            
            <h2 className="text-4xl lg:text-5xl text-[#1E293B] mb-6">
              About BrightFuture Academy
            </h2>
            
            <p className="text-lg text-[#64748B] mb-8">
              BrightFuture Academy is a leading private school in Tunisia, dedicated to combining academic excellence with creativity and core values. We believe every child has unique potential waiting to be unlocked in a nurturing, joyful environment.
            </p>

            <p className="text-lg text-[#64748B] mb-10">
              Our experienced educators create engaging learning experiences that inspire curiosity, build confidence, and prepare students for a bright future in an ever-changing world.
            </p>

            {/* Features Grid */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-[#2563EB]/10 p-3 rounded-xl shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-[#1E293B] mb-1">{feature.title}</h4>
                    <p className="text-[#64748B]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
