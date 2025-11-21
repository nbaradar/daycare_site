"use client";

import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck, GraduationCap, BookOpen } from "lucide-react";

export default function AboutContent() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6"
                >
                    About Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-neutral-600 dark:text-neutral-300"
                >
                    Dedicated to providing a loving, safe, and educational home environment for your child.
                </motion.p>
            </div>

            {/* Provider Bio Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-200"
                >
                    {/* Placeholder for Provider Image */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop')] bg-cover bg-center" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                        Meet the Provider
                    </h2>
                    <h3 className="text-xl font-medium text-teal-600 dark:text-teal-400 mb-4">
                        Ms. Sarah Johnson
                    </h3>
                    <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        <p>
                            Hello! I'm Sarah, and I have been a passionate early childhood educator for over 10 years. My journey began as a preschool teacher, where I discovered my love for helping young minds grow and explore the world around them.
                        </p>
                        <p>
                            I founded KidsDaycare to create a more intimate, home-like setting where I could provide personalized attention to each child. I believe that every child is unique and deserves a safe space to express themselves, make mistakes, and learn at their own pace.
                        </p>
                        <p>
                            When I'm not with the kids, I enjoy gardening, reading, and spending time with my own two children and husband.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-900/30">
                            <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                            <span className="font-medium text-neutral-900 dark:text-white">Certified CPR & First Aid</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30">
                            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            <span className="font-medium text-neutral-900 dark:text-white">Early Childhood Ed. Degree</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Philosophy / Values */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                        Our Philosophy
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Heart,
                            title: "Love & Respect",
                            desc: "We treat every child with kindness, respect, and empathy, modeling positive social interactions."
                        },
                        {
                            icon: ShieldCheck,
                            title: "Safety & Trust",
                            desc: "Your child's safety is our top priority. We maintain a secure, clean, and hazard-free environment."
                        },
                        {
                            icon: BookOpen,
                            title: "Lifelong Learning",
                            desc: "We foster a love for learning through curiosity-driven play and structured educational activities."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900"
                        >
                            <div className="w-12 h-12 mx-auto rounded-full bg-white dark:bg-neutral-800 shadow-sm flex items-center justify-center mb-6 text-teal-600">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
