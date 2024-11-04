import { Layout } from "antd";
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar";
// import { adminSidebarItems } from "../../routes/admin.routes";
const { Header, Content } = Layout;

const MainLayout  = () => {
  return (
    <div>
      <Layout style={{height: "100vh"}}>
        <Sidebar />
        <Layout>
          <Header style={{ padding: 0}} />
          <Content style={{ margin: "24px 16px 0" }}>
           <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
