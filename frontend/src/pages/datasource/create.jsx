import { Button, Col, Dropdown, Form, Input, Row, Typography } from "antd";
import { Icon } from "@iconify/react";
import { SUPPORTED_DATASOURCE_TYPES } from "@/constants/data";
import DefineType from "./createsteps/DefineType";

const CreateDatasourcePage = () => {
  const items = SUPPORTED_DATASOURCE_TYPES.map((item) => ({
    key: item.key,
    label: item.label,
    icon: <Icon icon={item.icon} />,
  }));

  return (
    <>
      <Typography.Title level={3}>New Datasource</Typography.Title>
      <DefineType />
    </>
  )
};

export default CreateDatasourcePage;