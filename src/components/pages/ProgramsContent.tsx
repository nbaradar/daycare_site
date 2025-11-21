"use client";

import { motion } from "framer-motion";
import { Baby, Blocks, BookOpen, Clock, Users, Calendar } from "lucide-react";

const programs = [
    {
        title: "Infant Care",
        age: "6 weeks - 18 months",
        description: "Our infant program focuses on providing a warm, nurturing environment where your baby feels safe and loved. We follow your child's individual schedule for feeding and sleeping.",
        features: [
            "Individualized feeding & nap schedules",
            "Sensory play & tummy time",
            "Daily communication logs",
            "Low teacher-to-child ratio"
        ],
        icon: Baby,
        color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
        borderColor: "border-pink-200 dark:border-pink-900/50"
    },
    {
        title: "Toddler Program",
        age: "18 months - 3 years",
        description: "Toddlers are curious explorers! Our program encourages independence, social interaction, and language development through structured play and activities.",
        features: [
            "Circle time & storytelling",
            "Arts & crafts",
            "Potty training support",
            "Outdoor play & motor skills"
        ],
        icon: Blocks,
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
        borderColor: "border-blue-200 dark:border-blue-900/50"
    },
    {
        title: "Preschool",
        age: "3 years - 5 years",
        description: "Preparing for kindergarten is an exciting milestone. Our preschool curriculum focuses on early literacy, math concepts, and social-emotional readiness.",
        features: [
            "Pre-reading & writing skills",
            "Math & science exploration",
            "Cooperative play & sharing",
            "Field trips & special events"
        ],
        icon: BookOpen,
        color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
        borderColor: "border-yellow-200 dark:border-yellow-900/50"
    }
];

const dailySchedule = [
    { time: "7:00 AM - 8:30 AM", activity: "Arrival & Free Play" },
    { time: "8:30 AM - 9:00 AM", activity: "Breakfast" },
    { time: "9:00 AM - 9:30 AM", activity: "Circle Time" },
    { time: "9:30 AM - 10:30 AM", activity: "Structured Learning Activities" },
    { time: "10:30 AM - 11:30 AM", activity: "Outdoor Play" },
    { time: "11:30 AM - 12:30 PM", activity: "Lunch" },
    { time: "12:30 PM - 2:30 PM", activity: "Nap / Quiet Time" },
    { time: "2:30 PM - 3:00 PM", activity: "Afternoon Snack" },
    { time: "3:00 PM - 4:00 PM", activity: "Arts, Crafts & Music" },
    { time: "4:00 PM - 5:00 PM", activity: "Free Play & Pickup" },
    { time: "5:00 PM - 6:00 PM", activity: "Extended Care & Closing" },
];

export default function ProgramsContent() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6"
                >
                    Our Programs
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-neutral-600 dark:text-neutral-300"
                >
                    Designed to support every stage of your child's development, from their first steps to their first day of school.
                </motion.p>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                {programs.map((program, index) => (
                    <motion.div
                        key={program.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-8 rounded-3xl bg-white dark:bg-neutral-900 border ${program.borderColor} shadow-sm hover:shadow-md transition-all`}
                    >
                        <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-6`}>
                            <program.icon className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                            {program.title}
                        </h2>
                        <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4">
                            <Users className="w-4 h-4" />
                            {program.age}
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                            {program.description}
                        </p>
                        <ul className="space-y-3">
                            {program.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Daily Schedule */}
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                        Sample Daily Schedule
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        A balanced routine of learning, play, and rest.
                    </p>
                </div>

                <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                    {dailySchedule.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 p-6 border-b border-neutral-100 dark:border-neutral-800 last:border-0 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 sm:w-48 shrink-0 text-teal-600 dark:text-teal-400 font-medium">
                                <Clock className="w-5 h-5" />
                                {item.time}
                            </div>
                            <div className="text-neutral-900 dark:text-neutral-200 font-medium">
                                {item.activity}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
