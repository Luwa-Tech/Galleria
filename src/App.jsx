import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Gallery from "./pages/Gallery"
import Layout from "./component/Layout"

const App = () => {
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route index element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/gallery" element={<Gallery />} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App