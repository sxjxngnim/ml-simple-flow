import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";

import { SIDEBAR_MENUITEMS } from "@/constants/data";
import ProjectSelector from "@/components/sidebar/ProjectSelector";
import NotFoundPage from "@/pages/404";
import DashboardPage from "@/pages/dashboard";
import CreateDatasourcePage from "@/pages/datasource/create";
import ConfigDatabase from "./pages/datasource/createsteps/ConfigDatabase";

const { Content, Sider } = Layout;
const AppLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        style={{
          position: "fixed",
          overflow: 'auto',
          insetInlineStart: 0,
          top: 0,
          bottom: 0,
        }}
        width={256}
        theme="light"
      >
        <div className="demo-logo-vertical" />
        <ProjectSelector />
        <Menu theme="light" mode="inline" items={SIDEBAR_MENUITEMS} />
      </Sider>
      <Layout
        style={{
          marginInlineStart: 256,
        }}
      >
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "calc(100vh - 64px)",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
};

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<AppLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="data-source/new" element={<CreateDatasourcePage />} />
        <Route path="test/config-db" element={<ConfigDatabase />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
      <Route path="/404" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;