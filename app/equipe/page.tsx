"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Linkedin, Mail, Github } from "lucide-react";

// Données des membres de l'équipe
const teamMembers = [
  {
    name: "ABDOU Sabo",
    role: "CEO & Fondateur",
    description: "Sabo est passionné par l'innovation et la gestion d'entreprise. Il a fondé l'entreprise en 2025.",
    image: "https://github.com/Moubarak321/sidra/blob/main/images/equipe/ceo.jpeg?raw=true",
    // socials: {
    //   linkedin: "https://linkedin.com/in/jeandupont",
    //   email: "jean.dupont@entreprise.com",
    //   github: "https://github.com/jeandupont"
    // }
  },
  {
    name: "KARIMOU Ayatoulaye",
    role: "Secrétaire Général",
    description: "",
    image: "https://github.com/Moubarak321/sidra/blob/main/images/equipe/b1.png?raw=true",
    // socials: {
    //   linkedin: "https://linkedin.com/in/mariecurie",
    //   email: "marie.curie@entreprise.com",
    //   github: "https://github.com/mariecurie"
    // }
  },
  {
    name: "DO REGO Nazifath",
    role: "Trésorerie Générale",
    description: "",
    image: "https://github.com/Moubarak321/sidra/blob/main/images/equipe/c1.png?raw=true",
    // socials: {
    //   linkedin: "https://linkedin.com/in/ahmedbenali",
    //   email: "ahmed.benali@entreprise.com",
    //   github: "https://github.com/ahmedbenali"
    // }
  },
//   {
//     name: "Sophie Martin",
//     role: "Designer UX/UI",
//     description: "Sophie crée des interfaces utilisateur intuitives et esthétiques pour nos produits.",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
    // socials: {
    //   linkedin: "https://linkedin.com/in/sophiemartin",
    //   email: "sophie.martin@entreprise.com",
    //   github: "https://github.com/sophiemartin"
    // }
//   }
];

export default function EquipePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Notre Équipe</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Rencontrez les membres passionnés et talentueux qui font de notre entreprise une réussite.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-80">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-fill "
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <p className="text-muted-foreground mb-6">{member.description}</p>
              {/* <div className="flex gap-4">
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-primary hover:text-primary/80" />
                </a>
                <a href={`mailto:${member.socials.email}`}>
                  <Mail className="h-6 w-6 text-primary hover:text-primary/80" />
                </a>
                <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-primary hover:text-primary/80" />
                </a>
              </div> */}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}