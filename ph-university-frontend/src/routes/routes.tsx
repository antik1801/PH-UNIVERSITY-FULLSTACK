import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "profile",
                element: <Profile />
            }
        ]
    },
    {
        path: "/admin",
        element: <App />,
        children : routesGenerator(adminPaths)
    },
    {
        path: "/faculty",
        element: <App />,
        children : routesGenerator(facultyPaths)
    },
    {
        path: "/student",
        element: <App />,
        children : routesGenerator(studentPaths)
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])