import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Accommodation from "../pages/Accommodation"
import AboutPage from "../pages/AboutPage"
import Error404 from "../pages/Error404"

export default function App() {
  const router =  createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: `/Accommodation/:id`,
      element: <Accommodation />
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