import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Download, Send } from "lucide-react";

export function Admissions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childAge: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-60 h-60 bg-[#FACC15]/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              Admissions Open
            </div>
            
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Join Our Family
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              Enrollment for the 2025–2026 academic year is now open. Give your child the gift of exceptional education.
            </p>

            <div className="space-y-6 mb-10">
              {[
                "📅 Rolling admissions throughout the year",
                "🎯 Limited spots per class for personalized attention",
                "💡 Campus tours available every week",
                "🤝 Financial aid options for qualified families"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-white text-lg"
                >
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button 
                size="lg"
                className="bg-[#FACC15] hover:bg-[#EAB308] text-[#1E293B] px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              <h3 className="text-2xl text-[#1E293B] mb-6">
                Start Your Application
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="parentName" className="block text-[#1E293B] mb-2">
                    Parent Name
                  </label>
                  <Input
                    id="parentName"
                    name="parentName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-6 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#1E293B] mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-6 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#1E293B] mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+216 XX XXX XXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-6 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="childAge" className="block text-[#1E293B] mb-2">
                    Child's Age
                  </label>
                  <Input
                    id="childAge"
                    name="childAge"
                    type="text"
                    placeholder="e.g., 5 years old"
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full px-4 py-6 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] transition-colors"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
