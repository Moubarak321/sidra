"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Nos Actions", href: "/actions" },
    { name: "Médiathèque", href: "/mediatheque" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header 
      className="bg-white border-b sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Ensemble Pour Demain</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium text-gray-700 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-primary hover:bg-primary/90 button-hover">
                <Link href="/faire-un-don">Faire un don</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="button-hover"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className="text-base font-medium text-gray-700 hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <Button asChild className="bg-primary hover:bg-primary/90 w-full button-hover">
                  <Link href="/faire-un-don">Faire un don</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;