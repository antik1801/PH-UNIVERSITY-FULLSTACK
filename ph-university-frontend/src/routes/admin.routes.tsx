
// import AdminDashboard from "../pages/admin/AdminDashboard";
// import CreateAdmin from "../pages/admin/CreateAdmin";
// import CreateFaculty from "../pages/admin/CreateFaculty";
// import CreateStudent from "../pages/admin/CreateStudent";

import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export const adminPaths = [
    {
        name: "Dashboard",
        path:"dashboard",
        element: 'ADMIN_DASHBOARD'
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path:"create-admin",
                element: 'CREATE_ADMIN'
            },
            {
                name: "Create Faculty",
                path:"create-faculty",
                element: 'CREATE_FACULTY'
            },
            {
                name: "Create Student",
                path: "create-student",
                element: 'CREATE_STUDENT'
            }
        ]
    },
    
]

type TRoute = {
    path: string;
    element: string; 
}

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) =>{

    if(item.path && item.element)
    {
        acc.push({
            path: item.path,
            element: item.element
        })
    }

    if(item.children)
    {
        item.children.forEach((child)=>{
            acc.push({
                path: child.path,
                element: child.element
            })
        })
    }
    return acc;
},[])


// type TAdminSidebarItems={
//     key: string,
//     label: string,
//     children: [{
//         key: string,
//         label: string
//     }]
// }

type TSidebarItems = {
    key: string;
    label: ReactNode;
    children?: TSidebarItems[];
}

export const adminSidebarItems = adminPaths.reduce((acc : TSidebarItems[], item) =>{

    if(item.path && item.element)
    {
        acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        })
    }

    if(item.children)
    {
       acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map(child =>({
            key: child.name,
            label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
        }))
       })
    }
    return acc;
},[])

  


// const newAdminPath = adminPaths.reduce((acc, item) =>{
//     acc.push(item);
// },[])