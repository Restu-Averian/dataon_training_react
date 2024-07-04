import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));

const Routing = () => {
  return (
    <Suspense fallback={<>Loading....</>}>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Suspense>
  );
};
export default Routing;
