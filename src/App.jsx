import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
// import Setting from "./Setting";
import Home from "./Home";
// import Profile from "./Profile";
import ProfileUser from "./ProfileUser";
import EditProfile from "./component/EditProfile";
import AllMyIdeas from "./component/AllMyIdeas";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/profile",
      element: <EditProfile/>,
    },    {
      path: "/Ideas",
      element: <AllMyIdeas/>,
    },
    {
      path: "/home",
      element: <Home/>,
    },
     {
      path: "/user/:id/:idman",
      element: <ProfileUser/>,
    },
    {
      path: "/SignUp",
      element: <SignUp/>,
    },
    // {
    //   path: "/Setting/:id",
    //   element: <Setting/>,
    // },
  ]);
  return (

    <RouterProvider router={router} />

  
  )
}

export default App
