import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Signin from "./pages/Signin"
import Gallery from "./pages/Gallery"
import Layout from "./component/Layout"
import AuthProvider from "./context/AuthProvider"
import RequireAuth from "./component/RequireAuth"

const App = () => {
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route index element={<Signin />} />

    <Route element={<RequireAuth />}>
      <Route path="/gallery" element={<Gallery />} />
    </Route>

    </Route>
  ))
  return (
    <DndProvider backend={HTML5Backend}>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </DndProvider>
  )
}

export default App