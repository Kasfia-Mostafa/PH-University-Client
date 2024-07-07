import { Layout, Menu } from "antd";
const { Sider } = Layout;
import sidebarItemsGenerator from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { useAppSelector } from "../../redux/features/hook";
import { selectCurrentUser } from "../../redux/auth/authSlice";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, "admin");
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(adminPaths, "faculty");
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(adminPaths, "student");
      break;
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
