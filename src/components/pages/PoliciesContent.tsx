"use client";

import { motion } from "framer-motion";
import { Clock, CalendarOff, Thermometer, AlertTriangle, DollarSign } from "lucide-react";

const policies = [
    {
        icon: Clock,
        title: "Hours of Operation",
        content: (
            <div className="space-y-2">
                <p>We are open Monday through Friday from 7:00 AM to 6:00 PM.</p>
                <p>Please ensure your child is dropped off no later than 9:30 AM so they can participate in our morning activities.</p>
            </div>
        ),
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
        icon: Thermometer,
        title: "Illness Policy",
        content: (
            <div className="space-y-2">
                <p>To ensure the health of all children and staff, please keep your child home if they exhibit any of the following symptoms:</p>
                <ul className="list-disc list-inside pl-2 space-y-1">
                    <li>Fever of 100.4°F or higher</li>
                    <li>Vomiting or diarrhea</li>
                    <li>Contagious rash or skin infection</li>
                    <li>Severe cough or cold symptoms</li>
                </ul>
                <p className="text-sm italic mt-2">Children must be symptom-free for 24 hours without medication before returning.</p>
            </div>
        ),
        color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
    },
    {
        icon: CalendarOff,
        title: "Holidays & Closures",
        content: (
            <div className="space-y-2">
                <p>We are closed on the following major holidays:</p>
                <ul className="list-disc list-inside pl-2 grid grid-cols-1 sm:grid-cols-2 gap-1">
                    <li>New Year's Day</li>
                    <li>Memorial Day</li>
                    <li>Independence Day</li>
                    <li>Labor Day</li>
                    <li>Thanksgiving Day & Friday</li>
                    <li>Christmas Eve & Day</li>
                </ul>
            </div>
        ),
        color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
    },
    {
        icon: AlertTriangle,
        title: "Late Pickup Policy",
        content: (
            <div className="space-y-2">
                <p>We understand that emergencies happen. However, consistent late pickups affect our staff's personal time.</p>
                <p>A late fee of $1 per minute will be charged for pickups after 6:00 PM.</p>
            </div>
        ),
        color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
    },
    {
        icon: DollarSign,
        title: "Tuition & Payments",
        content: (
            <div className="space-y-2">
                <p>Tuition is due on the first of every month. We accept cash, check, or bank transfer.</p>
                <p>A late fee of $25 will be applied if payment is not received by the 5th of the month.</p>
            </div>
        ),
        color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
    }
];

export default function PoliciesContent() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6"
                >
                    Policies & Handbook
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-neutral-600 dark:text-neutral-300"
                >
                    Clear guidelines to ensure a smooth, safe, and happy experience for everyone.
                </motion.p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {policies.map((policy, index) => (
                    <motion.div
                        key={policy.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-neutral-900 rounded-3xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col md:flex-row gap-6"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${policy.color} flex items-center justify-center shrink-0`}>
                            <policy.icon className="w-7 h-7" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                                {policy.title}
                            </h2>
                            <div className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                {policy.content}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
