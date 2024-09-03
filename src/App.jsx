import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Erro from "./pages/Error";
import EmAlta from "./pages/EmAlta";
import Carrinho from "./pages/Carrinho";
import Produto from "./pages/Produto";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Erro />,
      
    },
    {
      path: "/emalta",
      element: <EmAlta />
    },
    {
      path: "/carrinho",
      element: <Carrinho/>
    },
    {
      path: "/produto/:id",
      element: <Produto />
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
