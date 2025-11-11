import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Nour B.",
      role: "Parent of 2 students",
      text: "BrightFuture has been a blessing for our family. The teachers are warm, caring, and truly invested in each child's growth. My kids come home excited about what they learned every day!",
      rating: 5
    },
    {
      name: "Hichem T.",
      role: "Parent, Kindergarten",
      text: "My daughter absolutely loves going to school! The creative approach to learning and the safe environment give me complete peace of mind. Best decision we made for her education.",
      rating: 5
    },
    {
      name: "Amira K.",
      role: "Parent, Primary School",
      text: "The bilingual program is exceptional. My son is now confident in three languages and his critical thinking skills have improved dramatically. The teachers go above and beyond.",
      rating: 5
    },
    {
      name: "Mohamed S.",
      role: "Parent of 3 students",
      text: "All three of my children attend BrightFuture and each one thrives in their own way. The personalized attention and values-based education make this school truly special.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#2563EB] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#FACC15] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#2563EB]/10 text-[#2563EB] px-4 py-2 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#1E293B] mb-6">
            Parents Love BrightFuture
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Hear what families have to say about their experience with us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
              <Quote className="w-12 h-12 lg:w-16 lg:h-16 text-[#2563EB]/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 pt-8">
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-[#FACC15] text-2xl"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Text */}
              <p className="text-xl lg:text-2xl text-[#1E293B] mb-8 text-center italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <h4 className="text-xl text-[#1E293B] mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[#64748B]">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="lg"
              className="rounded-full w-12 h-12 p-0 border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-[#2563EB] w-8" 
                      : "bg-[#2563EB]/30"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="lg"
              className="rounded-full w-12 h-12 p-0 border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
