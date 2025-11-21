import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                KD
                            </div>
                            <span className="font-bold text-lg text-neutral-800 dark:text-white">
                                KidsDaycare
                            </span>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                            Providing a safe, nurturing, and educational environment for your little ones to grow and thrive.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md hover:text-teal-500 transition-all">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md hover:text-pink-500 transition-all">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["Home", "Programs", "About", "Enrollment", "Policies"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                                <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
                                <span>123 Sunshine Lane,<br />Happy Valley, CA 90210</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                                <span>hello@kidsdaycare.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Opening Hours</h3>
                        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <li className="flex justify-between">
                                <span>Mon - Fri</span>
                                <span className="font-medium">7:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span className="font-medium">Closed</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="font-medium">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-500">
                        &copy; {new Date().getFullYear()} KidsDaycare. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-neutral-500 dark:text-neutral-500">
                        <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
