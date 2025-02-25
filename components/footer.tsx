"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            {/* Conteneur pour l'image et le texte */}
            <Link href="/" className="flex items-center space-x-0 space-y-0">
              <Image
                src="https://github.com/Moubarak321/sidra/blob/main/logo.png?raw=true"
                alt="Logo Sidra"
                width={80} // Largeur de l'image
                height={80} // Hauteur de l'image
                className="object-cover " // Assure que l'image conserve ses proportions
              />
              {/* <span className="text-2xl font-bold">Sidra</span> */}
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Association caritative dédiée à la construction d&apos;un avenir meilleur
              pour tous à travers des projets humanitaires et sociaux.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/actions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Nos Actions
                </Link>
              </li>
              <li>
                <Link href="/mediatheque" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Médiathèque
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faire-un-don" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Faire un don
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Rue de la Solidarité</li>
              <li>75001 Paris, France</li>
              <li>ongsidra@gmail.com</li>
              <li>+229 01 52 72 70 70</li>
              <li>+1 (215) 909-2964</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ensemble Pour Demain. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;