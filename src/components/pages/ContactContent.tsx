"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactContent() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6"
                >
                    Get in Touch
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-neutral-600 dark:text-neutral-300"
                >
                    We'd love to hear from you. Reach out with any questions or to schedule a visit.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-8 rounded-3xl border border-teal-100 dark:border-teal-900/30">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                            Contact Information
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shrink-0 text-teal-600 shadow-sm">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">Address</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        123 Sunshine Lane<br />
                                        Happy Valley, CA 90210
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shrink-0 text-teal-600 shadow-sm">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">Phone</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">(555) 123-4567</p>
                                    <p className="text-sm text-neutral-500 mt-1">Mon-Fri, 7am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shrink-0 text-teal-600 shadow-sm">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">Email</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">hello@kidsdaycare.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="aspect-video rounded-3xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 dark:text-neutral-400 font-medium">
                            Interactive Map Component
                        </div>
                        {/* In a real app, embed Google Maps iframe here */}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm"
                >
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                        Send a Message
                    </h2>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Your Name</label>
                            <input type="text" id="name" className="w-full px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Jane Doe" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Email Address</label>
                            <input type="email" id="email" className="w-full px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="jane@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Subject</label>
                            <input type="text" id="subject" className="w-full px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="General Inquiry" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                            <textarea id="message" rows={5} className="w-full px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="How can we help you?"></textarea>
                        </div>

                        <button type="submit" className="w-full py-3 px-6 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2">
                            Send Message
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
