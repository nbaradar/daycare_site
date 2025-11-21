"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Enrollment", href: "/enrollment" },
    { name: "Policies", href: "/policies" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-3 dark:bg-neutral-900/80"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                        KD
                    </div>
                    <span className={cn(
                        "font-bold text-xl tracking-tight transition-colors",
                        scrolled ? "text-neutral-800 dark:text-white" : "text-neutral-800 dark:text-white" // Adjust based on hero section later
                    )}>
                        KidsDaycare
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-teal-500 relative group",
                                pathname === link.href
                                    ? "text-teal-600 font-semibold"
                                    : "text-neutral-600 dark:text-neutral-300"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full",
                                pathname === link.href ? "w-full" : ""
                            )} />
                        </Link>
                    ))}
                    <Link
                        href="/enrollment"
                        className="px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        Enroll Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="w-6 h-6 text-neutral-800 dark:text-white" />
                    ) : (
                        <Menu className="w-6 h-6 text-neutral-800 dark:text-white" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-800 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium py-2 border-b border-neutral-100 dark:border-neutral-800 last:border-0",
                                        pathname === link.href
                                            ? "text-teal-600"
                                            : "text-neutral-600 dark:text-neutral-300"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/enrollment"
                                className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white text-center font-medium shadow-md"
                            >
                                Enroll Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
