import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Header from "./components/layout/Header";
const Reports = lazy(() => import("./components/ui/Icons"));
const Icons = lazy(() => import("./components/ui/Icons"));
const Main = lazy(() => import("./features/main"));
const Aside = lazy(() => import("./components/layout/Aside"));
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
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/dashbaord/reports" element={<Reports />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
