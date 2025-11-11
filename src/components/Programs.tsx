import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Baby, BookOpen, GraduationCap } from "lucide-react";

export function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const programs = [
    {
      emoji: "🧸",
      icon: <Baby className="w-12 h-12 text-white" />,
      title: "Kindergarten",
      description: "Play-based early learning",
      details: "Ages 3-5 • Building foundations through exploration, creativity, and social development in a safe, nurturing environment.",
      color: "from-[#F472B6] to-[#EC4899]",
      bgColor: "bg-gradient-to-br from-[#F472B6] to-[#EC4899]"
    },
    {
      emoji: "📚",
      icon: <BookOpen className="w-12 h-12 text-white" />,
      title: "Primary School",
      description: "Strong academic foundation",
      details: "Ages 6-11 • Comprehensive curriculum focusing on literacy, numeracy, sciences, and creative arts with personalized attention.",
      color: "from-[#2563EB] to-[#1D4ED8]",
      bgColor: "bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]"
    },
    {
      emoji: "🎓",
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      title: "Middle School",
      description: "Leadership & creativity",
      details: "Ages 12-15 • Advanced learning with emphasis on critical thinking, project-based work, and preparing for the future.",
      color: "from-[#FACC15] to-[#EAB308]",
      bgColor: "bg-gradient-to-br from-[#FACC15] to-[#EAB308]"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FACC15]/10 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#2563EB]/10 text-[#2563EB] px-4 py-2 rounded-full mb-4">
            Our Programs
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#1E293B] mb-6">
            Tailored Learning Journeys
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            From early childhood to middle school, we offer age-appropriate programs designed to nurture growth at every stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                {/* Header with gradient */}
                <div className={`${program.bgColor} p-8 relative`}>
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-6xl mb-4"
                  >
                    {program.emoji}
                  </motion.div>
                  <div className="absolute top-6 right-6 opacity-20">
                    {program.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl text-[#1E293B] mb-2">
                    {program.title}
                  </h3>
                  <p className="text-[#2563EB] mb-4">
                    {program.description}
                  </p>
                  <p className="text-[#64748B]">
                    {program.details}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 ${program.bgColor} opacity-10 rounded-tl-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
