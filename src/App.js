
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Dashboard from "./pages/admin/Dashboard";
// import Livres from "./pages/admin/Livre";
// import Membres from "./pages/admin/Membres";
// import Message from "./pages/admin/Message";
import LoginForm from "./pages/connexion/LoginForm";
import SignUp from "./pages/inscription/SignUp";
import Dashboard from "./pages/admin/Dashboard";
import Livre from "./pages/admin/Livre";
import Membres from "./pages/admin/Membres";
import Message from "./pages/admin/Message";

const router = createBrowserRouter([
  {
  path: '/',
  element: <Outlet />,
  children: [{
    path: '/',
    element: <LoginForm/>
  },
  {
    path: '/sign-up',
    element: <SignUp/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    
  },
  {
    path: '/livre',
    element: <Livre/>,
    
  },
  {
    path: '/membres',
    element: <Membres/>
    
  },
  {
    path: '/messages',
    element: <Message/>
    
  },
]
  }
])

function App() {
  return  <RouterProvider router={router}/>
}

export default App;
