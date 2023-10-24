import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { PATHS } from "./paths";

const Home = lazy(() => import("../pages/Home/Home"));
const Planet = lazy(() => import("../pages/Planet/Planet"));
const People = lazy(() => import("../pages/People/People"));
const Starship = lazy(() => import("../pages/Starship/Starship"));
const Vehicle = lazy(() => import("../pages/Vehicle/Vehicle"));
const Specie = lazy(() => import("../pages/Specie/Specie"));
const Film = lazy(() => import("../pages/Film/Film"));
const Search = lazy(() => import("../pages/Search/Search"));
const Loading = lazy(() => import("../components/Loading/Loading"));
const Error = lazy(() => import("../pages/Error/Error"));

const Root: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <PageTemplate>
        <Routes>
          <Route index element={<Home />} errorElement={<Error />} />
          <Route path={PATHS.PLANETS} element={<Planet />} />
          <Route path={PATHS.FILMS} element={<Film />} />
          <Route path={PATHS.PEOPLE} element={<People />} />
          <Route path={PATHS.STARSHIPS} element={<Starship />} />
          <Route path={PATHS.VEHICLES} element={<Vehicle />} />
          <Route path={PATHS.SPECIES} element={<Specie />} />
          <Route path={PATHS.SEARCH} element={<Search />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </PageTemplate>
    </BrowserRouter>
  </Suspense>
);

export default Root;
