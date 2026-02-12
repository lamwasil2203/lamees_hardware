"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[1000] bg-white border-b border-border transition-shadow duration-400"
      style={{
        boxShadow: scrolled ? "0 2px 20px rgba(0, 0, 0, 0.1)" : "none",
        transitionTimingFunction: "var(--ease-smooth)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-12 py-6 flex justify-between items-center max-md:px-8">
        <Link
          href="/"
          className="font-display text-[2rem] font-black text-text no-underline transition-colors duration-400 hover:text-accent"
          style={{ transitionTimingFunction: "var(--ease-smooth)" }}
        >
          L.
        </Link>
        <div className="flex gap-10 items-center">
          {isProjectPage ? (
            <Link
              href="/#work"
              className="no-underline text-text font-medium text-[0.95rem] tracking-[0.5px] relative transition-colors duration-400 hover:text-accent after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-400 hover:after:w-full"
              style={{ transitionTimingFunction: "var(--ease-smooth)" }}
            >
              &larr; Back to Projects
            </Link>
          ) : (
            <Link
              href="#work"
              className="no-underline text-text font-medium text-[0.95rem] tracking-[0.5px] relative transition-colors duration-400 hover:text-accent after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-400 hover:after:w-full max-sm:text-[0.85rem]"
              style={{ transitionTimingFunction: "var(--ease-smooth)" }}
            >
              Projects
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
