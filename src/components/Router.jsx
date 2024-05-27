import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage"
import AccommodationSheet from "../pages/AccommodationSheet"
import AboutPage from "../pages/AboutPage"
import Error404 from "../pages/Error404"

export default function Router() {
  const router =  createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/AccommodationSheet",
      element: <AccommodationSheet />
    },
    {
      path: "/AboutPage",
      element: <AboutPage />
    },
    {
      path: "*",
      element: <Error404 />
    },
  ]);
  return router
}