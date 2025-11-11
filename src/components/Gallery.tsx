import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const images = [
    {
      src: "https://images.unsplash.com/photo-1692269725887-51e67bf1bed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGtpZHMlMjBzY2hvb2wlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc2MjgyNjY3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Happy kids in class",
      span: "md:col-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1758598737547-666bce663667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBlZHVjYXRpb25hbHxlbnwxfHx8fDE3NjI3Mzk5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Children learning",
      span: ""
    },
    {
      src: "https://images.unsplash.com/photo-1583238829785-7ba8a888bb72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0JTIwY3JlYXRpdmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjI4MjY2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Art activities",
      span: ""
    },
    {
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVtZW50YXJ5JTIwc2Nob29sJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYyNzQ1NjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Elementary students",
      span: "md:col-span-2"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#2563EB]/10 text-[#2563EB] px-4 py-2 rounded-full mb-4">
            Gallery
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#1E293B] mb-6">
            Life at BrightFuture
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Explore our colorful campus and activities where learning comes alive every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ${image.span}`}
            >
              <div className="relative group">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute right-10 top-1/2 w-20 h-20 border-4 border-[#FACC15] rounded-full opacity-20"
        />
      </div>
    </section>
  );
}
