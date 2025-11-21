"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, BookOpen, Star } from "lucide-react";

const features = [
    {
        icon: Heart,
        title: "Nurturing Environment",
        description: "A home-away-from-home where every child feels loved, valued, and secure.",
        color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
    },
    {
        icon: Shield,
        title: "Safety First",
        description: "Rigorous safety protocols and a secure facility to ensure your peace of mind.",
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
        icon: BookOpen,
        title: "Play-Based Learning",
        description: "Curriculum designed to spark curiosity and foster development through play.",
        color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
    },
];

const testimonials = [
    {
        name: "Sarah J.",
        text: "The best decision we made for our daughter. She loves going to daycare every day!",
        rating: 5,
    },
    {
        name: "Michael T.",
        text: "Incredible staff who truly care about the children. Highly recommended.",
        rating: 5,
    },
];

export default function HomeContent() {
    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100 via-transparent to-transparent dark:from-teal-900/20 opacity-70" />
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 opacity-70" />

                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-medium mb-6">
                                Now Enrolling for Fall 2025
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
                                Where Little Minds <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                                    Grow & Flourish
                                </span>
                            </h1>
                            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-10 leading-relaxed">
                                We provide a safe, nurturing, and stimulating environment where children can explore, learn, and develop essential life skills through play.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link
                                    href="/enrollment"
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-teal-500 to-blue-600 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    Enroll Your Child
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link
                                    href="/programs"
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all duration-300"
                                >
                                    View Programs
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* About Preview */}
            <section className="container mx-auto px-4 md:px-6 py-10">
                <div className="bg-neutral-900 rounded-[2.5rem] overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587654780291-39c940483713?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                    <div className="relative z-10 p-12 md:p-20 text-center md:text-left">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Experienced Care You Can Trust
                            </h2>
                            <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
                                With over 10 years of experience in early childhood education, we understand what it takes to help your child thrive. Our dedicated team is committed to providing the highest quality care.
                            </p>
                            <Link
                                href="/about"
                                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition-colors"
                            >
                                Meet Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                        Parents Love Us
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Don't just take our word for it. Here's what families are saying.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-900/30"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-lg text-neutral-800 dark:text-neutral-200 mb-6 italic">
                                "{testimonial.text}"
                            </p>
                            <p className="font-bold text-neutral-900 dark:text-white">
                                — {testimonial.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 md:px-6 text-center pb-10">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                        Ready to Join Our Family?
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                        Spaces are limited. Schedule a tour today to see if we are the right fit for your child.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-full hover:opacity-90 transition-opacity"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
}
