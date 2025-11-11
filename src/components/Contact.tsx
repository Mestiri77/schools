import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "123 Avenue Habib Bourguiba, Tunis 1000, Tunisia",
      color: "bg-[#2563EB]"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+216 71 XXX XXX",
      color: "bg-[#10B981]"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@brightfuture.tn",
      color: "bg-[#F59E0B]"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: "Mon-Fri: 8:00 AM - 4:00 PM",
      color: "bg-[#8B5CF6]"
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
            Contact Us
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#1E293B] mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 bg-[#F9FAFB] p-6 rounded-2xl hover:shadow-lg transition-all"
              >
                <div className={`${info.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0`}>
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-[#1E293B] mb-1">{info.title}</h4>
                  <p className="text-[#64748B]">{info.details}</p>
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-3xl overflow-hidden shadow-lg h-80 bg-gray-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102726.80715849096!2d10.099703759375002!3d36.79993915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="School Location"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-3xl p-8 lg:p-10 shadow-lg">
              <h3 className="text-2xl text-[#1E293B] mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[#1E293B] mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-6 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] transition-colors bg-white"
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
                    className="w-full px-4 py-6 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] transition-colors bg-white"
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
                    className="w-full px-4 py-6 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] transition-colors bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#1E293B] mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] transition-colors min-h-[150px] bg-white"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
