"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Heart, School, Home, Leaf } from "lucide-react";

const actions = [
  {
    title: "Aide alimentaire",
    description: "Distribution de repas et de colis alimentaires aux personnes dans le besoin",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
    icon: Heart
  },
  {
    title: "Éducation",
    description: "Soutien scolaire et formation professionnelle pour les jeunes défavorisés",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2069",
    icon: School
  },
  {
    title: "Charité spécial Ramadan 2025 ",
    description: "Soutenez les jeunes démunis pendant le mois de ramadan par vos contributions et dons",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
    icon: Home
  },
  // {
  //   title: "Environnement",
  //   description: "Projets écologiques et sensibilisation à la protection de l'environnement",
  //   image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013",
  //   icon: Leaf
  // },
];

export default function ActionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nos Actions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Découvrez nos différents programmes d&apos;aide et d&apos;accompagnement pour construire un monde meilleur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {actions.map((action, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src={action.image}
                alt={action.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <action.icon className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">{action.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{action.description}</p>
              <Button asChild>
                <Link href="/contact">En savoir plus</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}