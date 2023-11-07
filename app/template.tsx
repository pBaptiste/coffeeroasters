"use client"
import { motion } from "framer-motion"
export default function Template({ children }: { children: React.ReactNode }) {
    return <motion.main
        initial={{ opacity: 0, x: -200, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ type: "linear" }}>
        {children}
    </motion.main>
}