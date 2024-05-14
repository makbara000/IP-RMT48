import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './App.css'
import HomePage from "./pages/HomePage"
import AboutWikiPage from "./pages/AboutWikiPage"
import Navbar from "./components/Navigator"
import ArmorPage from "./pages/ArmorPage"
import WeaponPage from "./pages/WeaponPage"
import MonsterPage from "./pages/MonsterPage"

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
    path: "/monsters",
    element: 
    <>
    <Navbar/>,
    <MonsterPage/>
    </>
  },
])

function App(){
  return <RouterProvider router={router} />
}

export default App
