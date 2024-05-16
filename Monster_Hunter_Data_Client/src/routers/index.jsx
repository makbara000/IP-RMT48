import { createBrowserRouter, Outlet, redirect } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AboutWikiPage from "../pages/AboutWikiPage"
import Navbar from "../components/Navigator"
import ArmorPage from "../pages/ArmorPage"
import WeaponPage from "../pages/WeaponPage"
import MonsterPage from "../pages/MonsterPage"
import ItemPage from "../pages/ItemPage"
import MarketPlace from "../pages/MarketPlacePage"
import EventPage from "../pages/EventPage"
import WeaponDetailPage from "../pages/WeaponDetailPage"
import Login from "../pages/LoginPage"
import Register from "../pages/RegisterPage"

export const router = createBrowserRouter([
    {
      path: "/login",
      element: 
      <>
      <Login/>
      </>,
      loader: () =>{
        let token = localStorage.getItem("access_token")
        if(token){
          return redirect("/")
        }
        return null
      }
    },
    {
      path: "/register",
      element: 
      <>
      <Register/>
      </>,
      loader: () =>{
        let token = localStorage.getItem("access_token")
          if(token){
            return redirect("/")
          }
          return null
      }
    },
    {
      path: "/",
      element: 
      <>
      <Navbar/>,
      <Outlet/>
      </>,
      loader: () =>{
        let token = localStorage.getItem("access_token")
        if(!token){
          return redirect("/login")
        }
        return null
      },
      children: [
        {
          path: "/",
          element: 
          <>
          <HomePage/>
          </>
        },
        {
          path: "/about",
          element: 
          <>
          <AboutWikiPage/>
          </>
        },
        {
          path: "/armors",
          element: 
          <>
          <ArmorPage/>
          </>
        },
        {
          path: "/weapons",
          element: 
          <>
          <WeaponPage/>
          </>
        },
        {
          path: "/weapons/:type/:id",
          element: 
          <>
          <WeaponDetailPage/>
          </>
        },
        {
          path: "/monsters",
          element: 
          <>
          <MonsterPage/>
          </>
        },
        {
          path: "/items",
          element: 
          <>
          <ItemPage/>
          </>
        },
        {
          path: "/market",
          element: 
          <>
          <MarketPlace/>
          </>
        },
        {
          path: "/events",
          element: 
          <>
          <EventPage/>
          </>
        },
      ]
    },
  ])