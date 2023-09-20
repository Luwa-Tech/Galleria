import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Signin from "./pages/Signin"
import Gallery from "./pages/Gallery"
import Layout from "./component/Layout"
import AuthProvider from "./context/AuthProvider"

const App = () => {
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route index element={<Signin />} />
    <Route path="/gallery" element={<Gallery />} />
    </Route>
  ))
  return (
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App