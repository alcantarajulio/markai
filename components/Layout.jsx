import { motion } from "framer-motion";

// @ts-ignore
export default function Layout({ children }) {
    return (
        <
            // @ts-ignore
            motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
            {children}
        </motion.div>
    )
}