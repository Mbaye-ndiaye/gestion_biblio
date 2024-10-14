import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginForm from "./pages/connexion/LoginForm";
import SignUp from "./pages/inscription/SignUp";
import Dashboard from "./pages/admin/Dashboard";
import Livre from "./pages/admin/Livre";
import Membres from "./pages/admin/Membres";
import Message from "./pages/admin/Message";
import Utilisateur from "./pages/utilisateurs/Utilisateur";
import ProfilePage from "./pages/profil/ProfilePage";
import Emprunte from "./pages/emprunts/Emprunte";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/loginForm",
        element: <LoginForm />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/livre",
        element: <Livre />,
      },
      {
        path: "/membres",
        element: <Membres />,
      },
      {
        path: "/messages",
        element: <Message />,
      },

      {
        path: "/utilisateur",
        element: <Utilisateur />,
      },

      {
        path: "/profile",
        element: <ProfilePage />,
      },

      {
        path: "/emprunts",
        element: <Emprunte />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
