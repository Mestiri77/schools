import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Award, BookOpen, Heart, Mail, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Teachers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teachers = [
    {
      name: "Sarah Mansour",
      role: "Head of Primary",
      specialty: "Mathematics & Science",
      image: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB0ZWFjaGVyJTIwc21pbGluZ3xlbnwxfHx8fDE3NjI4NDk0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "12+ years nurturing young minds with innovative teaching methods",
      achievements: ["Cambridge Certified", "STEM Expert", "Parent's Choice Award"],
      color: "from-[#2563EB] to-[#3B82F6]"
    },
    {
      name: "Ahmed Ben Ali",
      role: "Middle School Director",
      specialty: "Languages & Literature",
      image: "https://images.unsplash.com/flagged/photo-1559475555-b26777ed3ab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdGVhY2hlciUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjI4NDk0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Passionate educator fostering critical thinking and global citizenship",
      achievements: ["Bilingual Education", "Leadership Coach", "10 Years Experience"],
      color: "from-[#F59E0B] to-[#FACC15]"
    },
    {
      name: "Leila Hamdi",
      role: "Kindergarten Lead",
      specialty: "Early Childhood Education",
      image: "https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyNzk0MzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Creating magical first learning experiences with care and creativity",
      achievements: ["Montessori Certified", "Play-Based Learning", "Child Psychology"],
      color: "from-[#EC4899] to-[#F472B6]"
    },
    {
      name: "Karim Trabelsi",
      role: "Technology & Innovation",
      specialty: "Computer Science & Robotics",
      image: "https://images.unsplash.com/photo-1674928286503-facfe61eb634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHRlYWNoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI4MTU3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Inspiring the next generation of innovators through tech-integrated learning",
      achievements: ["Coding Expert", "Robotics Champion", "Digital Pioneer"],
      color: "from-[#8B5CF6] to-[#A78BFA]"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-white via-[#F9FAFB] to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#2563EB]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FACC15]/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#2563EB]/10 text-[#2563EB] px-4 py-2 rounded-full mb-4">
            Meet Our Faculty
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#1E293B] mb-6">
            Expert & Passionate Teachers
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Our dedicated educators bring expertise, warmth, and innovation to every classroom.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className="relative h-full">
                {/* Main Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative"
                >
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${teacher.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />
                    
                    {/* Floating Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={hoveredCard === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                    >
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#FACC15]" />
                        <span className="text-sm text-[#1E293B]">Top Rated</span>
                      </div>
                    </motion.div>

                    {/* Social Links - Appear on Hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={hoveredCard === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3"
                    >
                      <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-colors shadow-lg">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-colors shadow-lg">
                        <Linkedin className="w-4 h-4" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Name & Role */}
                    <div className="mb-4">
                      <h3 className="text-xl text-[#1E293B] mb-1">
                        {teacher.name}
                      </h3>
                      <p className="text-sm text-[#2563EB]">
                        {teacher.role}
                      </p>
                    </div>

                    {/* Specialty Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F9FAFB] to-white px-3 py-1.5 rounded-full mb-4 border border-gray-100">
                      <BookOpen className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span className="text-xs text-[#64748B]">{teacher.specialty}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-[#64748B] mb-4 leading-relaxed">
                      {teacher.bio}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {teacher.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center gap-2 text-xs text-[#64748B]"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`h-1 bg-gradient-to-r ${teacher.color}`} />
                </motion.div>

                {/* Decorative Corner Element */}
                <motion.div
                  animate={hoveredCard === index ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${teacher.color} rounded-full blur-xl opacity-50 -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F9FAFB] to-white px-8 py-4 rounded-2xl border border-gray-200 shadow-sm">
            <Heart className="w-5 h-5 text-[#EC4899]" />
            <p className="text-[#64748B]">
              <span className="text-[#1E293B]">Want to join our teaching team?</span> 
              <a href="#contact" className="text-[#2563EB] hover:underline ml-1">We're hiring!</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
