"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, Calendar, ArrowRight } from "lucide-react";

export default function EnrollmentContent() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6"
                >
                    Enrollment
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-neutral-600 dark:text-neutral-300"
                >
                    Join our family! Here is everything you need to know about securing a spot for your child.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* Steps */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
                        How to Enroll
                    </h2>
                    <div className="space-y-8">
                        {[
                            {
                                icon: Calendar,
                                title: "1. Schedule a Tour",
                                desc: "Contact us to schedule a visit. We want you to see our environment and meet us in person."
                            },
                            {
                                icon: FileText,
                                title: "2. Submit Application",
                                desc: "If you feel we are a good fit, fill out the enrollment application and provide necessary documents."
                            },
                            {
                                icon: CheckCircle2,
                                title: "3. Secure Your Spot",
                                desc: "Pay the registration fee and deposit to secure your child's spot in our program."
                            }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center shrink-0 text-teal-600 dark:text-teal-400">
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{step.title}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30">
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Waitlist Information</h3>
                        <p className="text-blue-800 dark:text-blue-200 text-sm">
                            Our spots fill up quickly! If we are currently full, you can join our waitlist. We will contact you as soon as a spot becomes available based on your desired start date.
                        </p>
                    </div>
                </motion.div>

                {/* Inquiry Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm"
                >
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                        Inquiry Form
                    </h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="parentName" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Parent's Name</label>
                                <input type="text" id="parentName" className="w-full px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Phone Number</label>
                                <input type="tel" id="phone" className="w-full px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="(555) 123-4567" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="childAge" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Child's Age</label>
                                <input type="text" id="childAge" className="w-full px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="e.g. 2 years" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="startDate" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Desired Start Date</label>
                            <input type="date" id="startDate" className="w-full px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Message / Questions</label>
                            <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Tell us a bit about your needs..."></textarea>
                        </div>

                        <button type="submit" className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                            Submit Inquiry
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
