import { Button, Dropdown, Flex, Space, Typography } from "antd";
import { Icon } from "@iconify/react";
import { mockProjects } from "@/constants/mock";
import { useState } from "react";

const ProjectSelector = () => {
  const [currentProject, setCurrentProject] = useState(mockProjects[0]);
  const handleMenuClick = (key) => {
    if (key === "new") {
      console.log("Create new project");
      return;
    }
    setCurrentProject(mockProjects.find((project) => project.id === key));
  };

  const projects = mockProjects;
  const items = projects.map((project) => ({
    key: project.id,
    label: project.name,
  }));

  items.push({ key: "divider", type: "divider" });
  items.push({ key: "new", label: "New Project", icon: (<Icon icon="material-symbols:add" />) });

  return (
    <Dropdown
      menu={{
        items,
        onClick: ({ key }) => handleMenuClick(key),
      }}
      trigger={["click"]}
    >
      <Button style={{ width: "90%", height: 50, margin: "20px 0 20px 10px" }}>
        <Flex 
          justify="space-between"
          align="center"
          style={{ width: "100%" }}
        >
          <Space
            direction="vertical"
            align="start"
            size={0}
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
          >
            <Typography.Paragraph style={{ margin: 0 }}>
              {currentProject.name}
            </Typography.Paragraph>
            <Typography.Text type="secondary">
              {currentProject.type}
            </Typography.Text>
          </Space>
          <Icon icon="tabler:switch-vertical" />
        </Flex>
      </Button>
    </Dropdown>
  )
};

export default ProjectSelector;