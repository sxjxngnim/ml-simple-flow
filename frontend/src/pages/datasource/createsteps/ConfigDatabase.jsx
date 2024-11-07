import { Card, Col, Form, Input, Row, Typography, Radio, Space, Button, Flex } from "antd";
import { Icon } from "@iconify/react";

const ConfigDatabase = () => {
  const supportedDatabases = [
    {
      key: "mysql",
      label: "MySQL",
      icon: "logos:mysql",
    },
    {
      key: "postgresql",
      label: "PostgreSQL",
      icon: "logos:postgresql",
    },
    {
      key: "mssql",
      label: "Microsoft SQL Server",
      icon: "devicon:microsoftsqlserver",
    },
    {
      key: "oracle",
      label: "Oracle Database",
      icon: "logos:oracle",
    }
  ]
  return (
    <>
      <Typography.Title level={5}>General</Typography.Title>
      <Form
        layout="vertical"
        name="basic"
      >
        <Form.Item label="Host">
          <Input />
        </Form.Item>
        <Form.Item label="Port">
          <Input />
        </Form.Item>
        <Form.Item label="Database Identifier">
          <Input />
        </Form.Item>
        <Typography.Title level={5}>Authentication</Typography.Title>
        <Form.Item label="Username">
          <Input />
        </Form.Item>
        <Form.Item label="Password">
          <Input />
        </Form.Item>

        <Typography.Title level={5}>Configuration</Typography.Title>
        <Form.Item label="Application">
          <Row gutter={16}>
            {supportedDatabases.map((item) => (
              <Col key={item.key} span={6}>
                <Card
                  hoverable
                  style={{ padding: 15, marginBottom: 20 }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Radio
                      style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        borderRadius: "50%",
                        padding: 0
                      }}
                    />
                    <Space direction="vertical">
                      <Icon icon={item.icon} style={{ fontSize: 24 }} />
                      <Typography.Text strong>{item.label}</Typography.Text>
                    </Space>

                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Form.Item>
        <Form.Item label="Query">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Flex justify="center">
            <Space>
              <Button type="primary">Test Connection</Button>
              <Button type="primary">Save</Button>
            </Space>
          </Flex>
        </Form.Item>
      </Form>
    </>
  )
};

export default ConfigDatabase;