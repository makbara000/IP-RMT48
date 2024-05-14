import { createBrowserRouter, RouterProvider } from "react-router-dom"

// import './App.css'
import HomePage from "./pages/HomePage"
import AboutWikiPage from "./pages/AboutWikiPage"
import Navbar from "./components/Navigator"
import ArmorPage from "./pages/ArmorPage"

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
])

function App(){
  return <RouterProvider router={router} />
}

export default App
