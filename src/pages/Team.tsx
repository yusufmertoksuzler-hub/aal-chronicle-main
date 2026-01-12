import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/layout/PageTransition";
import { teamMembers } from "@/data/team";

const Team = () => {
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
              Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-muted-foreground font-body text-sm sm:text-base max-w-lg mx-auto"
            >
              The dedicated people behind Voice of AAL
            </motion.p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="container-editorial py-10 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center group"
              >
                {/* Avatar */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 overflow-hidden rounded-full border-[3px] border-secondary group-hover:border-primary transition-colors">
                  <motion.img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Info */}
                <h3 className="font-headline text-lg sm:text-xl font-bold text-headline mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-body font-semibold text-primary uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-body font-body leading-relaxed px-2">
                  {member.bio}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section className="container-editorial pb-12 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-xl mx-auto text-center bg-secondary p-6 sm:p-8 border-t-[3px] border-primary"
          >
            <h2 className="font-headline text-xl sm:text-2xl font-bold text-headline mb-3">
              Join Our Team
            </h2>
            <p className="text-muted-foreground text-sm font-body mb-5">
              We're looking for passionate writers, photographers, and creatives.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Get in Touch
            </a>
          </motion.div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Team;
