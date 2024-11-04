import { Menu, Layout } from "antd";
import React from "react";
import sidebarItemsGenerator from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

// For better understanding we will create an object
const UserRoles = {
  ADMIN: "admin",
  STUDENT: "student",
  FACULTY: "faculty",
} as const;

const Sidebar = () => {
  const role = UserRoles.ADMIN;

  let sidebarItems;
  switch (role) {
    case UserRoles.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, UserRoles.ADMIN);
      break;
    case UserRoles.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, UserRoles.FACULTY);
      break;
    case UserRoles.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, UserRoles.STUDENT);
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div
          style={{
            color: "white",
            height: "4rem",
            width: "full",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "1",
          }}
        >
          <NavLink to={"/"}>
            {" "}
            <h1>PH- UNIVERSITY</h1>
          </NavLink>{" "}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
    </React.Fragment>
  );
};

export default Sidebar;
