import { motion } from "motion/react";
import { lazy } from "react";
import MyCardsSection from "./components/MyCardsSection";
import RecentTransaction from "./components/RecentTransaction";
const WeeklyActivity = lazy(
  () => import("./components/WeeklyActivitySection/WeeklyActivity")
);
const QuickTransferSection = lazy(
  () => import("./components/QuickTransferSection/")
);

export default function Main() {
  return (
    <div className="space-y-4 h-max ">
      <motion.div
        initial={{ transform: "translateY(-100%)" }}
        animate={{ transform: "translateY(0%)" }}
        className="flex gap-4  flex-col md:flex-row justify-between"
      >
        <motion.div
          initial={{ transform: "translateY(-100%)" }}
          animate={{ transform: "translateY(0%)" }}
        >
          <MyCardsSection />
        </motion.div>
        <motion.div
          initial={{ transform: "translateY(-140%)" }}
          animate={{ transform: "translateY(0%)" }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="transition-all delay-300 duration-500" 
        >
          <RecentTransaction />
        </motion.div>
      </motion.div>
      <WeeklyActivity />
      <QuickTransferSection />
    </div>
  );
}
