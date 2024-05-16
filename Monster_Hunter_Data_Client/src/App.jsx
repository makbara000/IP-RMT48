import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './App.css'
import HomePage from "./pages/HomePage"
import AboutWikiPage from "./pages/AboutWikiPage"
import Navbar from "./components/Navigator"
import ArmorPage from "./pages/ArmorPage"
import WeaponPage from "./pages/WeaponPage"
import MonsterPage from "./pages/MonsterPage"
import ItemPage from "./pages/ItemPage"
import MarketPlace from "./pages/MarketPlacePage"
import EventPage from "./pages/EventPage"
import WeaponDetailPage from "./pages/WeaponDetailPage"
import Login from "./pages/LoginPage"
import Register from "./pages/RegisterPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
    <Navbar/>,
    <HomePage/>
    </>
  },
  {
    path: "/login",
    element: 
    <>
    <Login/>
    </>
  },
  {
    path: "/register",
    element: 
    <>
    <Register/>
    </>
  },
  {
    path: "/about",
    element: 
    <>
    <Navbar/>,
    <AboutWikiPage/>
    </>
  },
  {
    path: "/armors",
    element: 
    <>
    <Navbar/>,
    <ArmorPage/>
    </>
  },
  {
    path: "/weapons",
    element: 
    <>
    <Navbar/>,
    <WeaponPage/>
    </>
  },
  {
    path: "/weapons/:type/:id",
    element: 
    <>
    <Navbar/>,
    <WeaponDetailPage/>
    </>
  },
  {
    path: "/monsters",
    element: 
    <>
    <Navbar/>,
    <MonsterPage/>
    </>
  },
  {
    path: "/items",
    element: 
    <>
    <Navbar/>,
    <ItemPage/>
    </>
  },
  {
    path: "/market",
    element: 
    <>
    <Navbar/>,
    <MarketPlace/>
    </>
  },
  {
    path: "/events",
    element: 
    <>
    <Navbar/>,
    <EventPage/>
    </>
  },
])

function App(){
  return <RouterProvider router={router} />
}

export default App
