"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Ensemble Pour Demain</span>
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
              <li>contact@ensemblepourdemain.org</li>
              <li>+33 (0)1 23 45 67 89</li>
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