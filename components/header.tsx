
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-heading">
          PB
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-primary/80 transition-colors">
            About
          </a>
          <a href="#companies" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Companies
          </a>
          <a href="#community" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Community
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Contact
          </a>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
