import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const NF = lazy(() => import("./pages/NF"));

const Routing = () => {
  return (
    <Suspense fallback={<>Loading....</>}>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="*" Component={NF} />
      </Routes>
    </Suspense>
  );
};
export default Routing;
