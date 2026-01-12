import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/layout/PageTransition";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <PageTransition>
        {/* Header */}
        <section className="bg-paper border-b-[3px] border-headline">
          <div className="container-editorial py-10 sm:py-12 md:py-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-3"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-muted-foreground font-body text-sm sm:text-base max-w-lg mx-auto"
            >
              Have a story or question? We'd love to hear from you.
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="container-editorial py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h2 className="font-headline text-xl font-bold text-headline mb-6">
                Get in Touch
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-primary/10 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-headline text-sm mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      Atakent Anatolian High School<br />
                      Karşıyaka, İzmir, Turkey
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-primary/10 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-headline text-sm mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm font-body">
                      info@voiceofaal.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-primary/10 text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-headline text-sm mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm font-body">
                      0 232 362 98 61
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-secondary">
                <h3 className="font-headline text-sm font-bold text-headline mb-1">Office Hours</h3>
                <p className="text-xs text-muted-foreground font-body">
                  Mon - Fri: 8:30 AM - 4:30 PM
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-body font-semibold text-headline mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-body font-semibold text-headline mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-body font-semibold text-headline mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-body font-semibold text-headline mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Contact;
