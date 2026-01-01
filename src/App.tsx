import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Header from "./components/layout/Header";
import { motion, type Variants } from "motion/react";
const Reports = lazy(() => import("./components/ui/Icons"));
const Icons = lazy(() => import("./components/ui/Icons"));
const Main = lazy(() => import("./features/main"));
const Transactions = lazy(() => import("./features/Transactions"));
const Accounts = lazy(() => import("./features/Accounts"));
const Aside = lazy(() => import("./components/layout/Aside"));
const Investments = lazy(() => import("./features/Investments"));

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delay: 0.3,
    },
  },
};
function App() {
  return (
    <>
      <Icons />
      <div
        id="container"
        className="fixed bg-(--background) left-0 top-0 w-full h-full lg:grid grid-cols-[max-content_1fr]"
      >
        <BrowserRouter>
          <Aside />

          <div className="overflow-auto h-full">
            <Header />
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="p-8"
            >
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/Accounts" element={<Accounts />} />
                <Route path="/Investments" element={<Investments />} />
                <Route path="/dashbaord/reports" element={<Reports />} />
              </Routes>
            </motion.div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
