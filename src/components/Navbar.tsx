"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LexproLogo } from "@/components/LexproLogo";
import { NAV_LINKS } from "@/lib/content";
import { CTA } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-nav" : "shadow-none"
      }`}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <a href="#inicio" className="flex items-center" aria-label="Lexpro - Inicio">
          <LexproLogo className="h-9 w-auto lg:h-10" />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink hover:text-teal transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={CTA.demo} variant="primary" size="md">
            Solicitar Demo
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-deep hover:bg-surface-alt"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-ink/10 bg-white"
          >
            <Container className="py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 text-base font-medium text-ink hover:text-teal hover:bg-surface-alt rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={CTA.demo}
                variant="primary"
                size="md"
                className="mt-2 w-full"
              >
                Solicitar Demo
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
