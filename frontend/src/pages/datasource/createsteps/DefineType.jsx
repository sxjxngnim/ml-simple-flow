import { Card, Col, Input, Row, Typography, Radio, Space } from "antd";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { SUPPORTED_DATASOURCE_TYPES } from "@/constants/data";

const DefineType = () => {
  const [selectedType, setSelectedType] = useState(null);

  const onTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <>
      <div style={{ marginBottom: 20, width: "100%" }}>
        <Typography.Text>Identifier Name</Typography.Text>
        <Input style={{ width: "100%" }} />
      </div>

      <div style={{ marginBottom: 20, width: "100%" }}>
        <Typography.Text>Data Source Type</Typography.Text>
        <Radio.Group
          onChange={onTypeChange}
          style={{ width: "100%" }}
        >
          <Row gutter={16}>
            {SUPPORTED_DATASOURCE_TYPES.map((item) => (
              <Col key={item.key} span={12}>
                <Card
                  hoverable
                  style={{ width: "100%", padding: 15, marginBottom: 20, position: "relative" }}
                >
                  <div style={{ textAlign: "left", paddingLeft: 20 }}>
                    <Radio
                      value={item.key}
                      style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        borderRadius: "50%",
                        padding: 0
                      }}
                    />
                    <Space direction="vertical">
                      <Space>
                        <Icon icon={item.icon} style={{ fontSize: 24 }} />
                        <Typography.Text strong>{item.label}</Typography.Text>
                      </Space>
                      <Typography.Paragraph style={{ margin: 0, color: "gray" }}>
                        {item.description}
                      </Typography.Paragraph>
                    </Space>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </div>
    </>
  );
};

export default DefineType;
