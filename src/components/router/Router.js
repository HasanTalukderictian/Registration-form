import { createBrowserRouter } from "react-router-dom";
import Main from "../Page/Main";
import Registration from "../Page/Registration/Registration";
import Home from "../Page/Home/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/registration',
            element:<Registration></Registration>
        },
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);
  