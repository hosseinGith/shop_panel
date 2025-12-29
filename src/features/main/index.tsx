import { motion, type Variants } from "motion/react";
import { lazy } from "react";
import MyCardsSection from "./components/MyCardsSection";
const WeeklyActivity = lazy(
  () => import("./components/WeeklyActivitySection/WeeklyActivity")
);
const QuickTransferSection = lazy(
  () => import("./components/QuickTransferSection/")
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // تاخیر بین المان‌های فرزند
    },
  },
};

export default function Main() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-8 transition-all space-y-4 h-max"
    >
      <MyCardsSection />
      <WeeklyActivity />
      <QuickTransferSection />
    </motion.div>
  );
}
