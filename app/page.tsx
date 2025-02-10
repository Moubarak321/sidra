"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Building, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
          alt="Des personnes s'entraidant"
          fill
          className="object-cover brightness-50"
          priority
        />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center text-white px-4 max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ensemble, construisons un avenir meilleur
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Rejoignez notre mission pour apporter de l'espoir et du soutien à ceux qui en ont le plus besoin
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 button-hover">
                <Link href="/faire-un-don">Faire un don maintenant</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Nos missions principales
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Building, title: "Construction", desc: "Bâtir des infrastructures essentielles pour les communautés dans le besoin" },
              { icon: Users, title: "Aide humanitaire", desc: "Fournir une assistance d'urgence aux populations vulnérables" },
              { icon: Globe, title: "Développement durable", desc: "Mettre en œuvre des solutions durables pour l'autonomie des communautés" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 card-hover">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Notre impact en chiffres
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-center"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: "150+", text: "Projets réalisés" },
              { number: "50k+", text: "Personnes aidées" },
              { number: "25", text: "Pays d'intervention" },
              { number: "10k+", text: "Donateurs actifs" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <p className="text-4xl font-bold text-primary mb-2">{item.number}</p>
                <p className="text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Rejoignez notre cause</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Votre soutien peut faire la différence dans la vie de nombreuses personnes.
            Chaque don compte, peu importe son montant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 button-hover">
                <Link href="/faire-un-don">Faire un don</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="button-hover">
                <Link href="/contact">Devenir bénévole</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}