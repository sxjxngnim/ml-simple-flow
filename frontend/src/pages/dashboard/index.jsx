import ConfusionMatrixChart from "@/components/charts/ConfusionMatrixChart";
import DatasetSampleChart from "@/components/charts/DatasetSampleChart";
import FeatureImportanceChart from "@/components/charts/FeatureImportanceChart";
import PrecisionRecallChart from "@/components/charts/PrecisionRecallChart";
import ROCCurveChart from "@/components/charts/ROCCurveChart";
import { Icon } from "@iconify/react";
import { Badge, Button, Card, Col, Descriptions, Flex, List, Row, Space, Statistic, Table, Tag, Typography } from "antd";

const DashboardPage = () => {
  return (
    <>
      <Typography.Title level={3}>Project 1</Typography.Title>

      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Row style={{ marginBottom: 10 }}>
              <Space align="center" size="small">
                <Icon icon="bx:key" fontSize={24} style={{ paddingTop: 5 }} />
                <Typography.Text >User 1</Typography.Text>
              </Space>
            </Row>
            <Row style={{ marginBottom: 10 }}>
              <Space align="center" size="small">
                <Icon icon="carbon:chart-logistic-regression" fontSize={24} style={{ paddingTop: 5 }} />
                <Typography.Text >Classification</Typography.Text>
              </Space>
            </Row>
            <Row style={{ marginBottom: 10 }}>
              <Space align="center" size="small">
                <Icon icon="mingcute:time-line" fontSize={24} style={{ paddingTop: 5 }} />
                <Typography.Text >2024-10-22 21:00:00</Typography.Text>
              </Space>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Row style={{ marginBottom: 10 }}>
              <Space align="center" size="small">
                <Icon icon="lucide:sheet" fontSize={24} style={{ paddingTop: 5 }} />
                <Typography.Text >1025 rows & 14 columns</Typography.Text>
              </Space>
            </Row>
            <Row style={{ marginBottom: 10 }}>
              <Space align="center" size="small">
                <Icon icon="material-symbols:flowsheet-outline-sharp" fontSize={24} style={{ paddingTop: 5 }} />
                <Badge count={4} color="blue" />
              </Space>
            </Row>
            <Row style={{ marginBottom: 10 }}>
              <Space align="center" size="small">
                <Icon icon="proicons:branch" fontSize={24} style={{ paddingTop: 5 }} />
                <Space>
                  <Tag>v1.0.0</Tag>
                  <Tag>v1.0.1</Tag>
                  <Tag>v1.0.2</Tag>
                  <Button type="link" size="small">More</Button>
                </Space>
              </Space>
            </Row>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            style={{
              height: "100%"
            }}
          >
            <List
              header={
                <Space>
                  <Typography.Text strong>Recent Experiments</Typography.Text>
                  <Button type="link">View all</Button>
                </Space>
              }
            >
              <List.Item>
                <Flex justify="space-between" style={{ width: "100%" }}>
                  <Typography.Text>Experiment with Random Forest</Typography.Text>
                  <Badge status="processing" text="Running" />
                </Flex>
              </List.Item>
            </List>
          </Card>
        </Col>
      </Row>

      <Typography.Title level={5}>Data Collection</Typography.Title>
      <Row>
        <Col span={24}>
            <Card style={{ width: "100%" }}>
              <DatasetSampleChart />
            </Card>
        </Col>
      </Row>

      <Typography.Title level={5}>Model</Typography.Title>
      <Space align="center">
        <Typography.Paragraph style={{paddingTop: 10}}>
          Version that was setting up as (master) is 
        </Typography.Paragraph>
        <Tag>v1.0.2</Tag>
      </Space>
      <Row style={{ marginBottom: 20 }} gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic title="Accuracy" value="96.56" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Precision" value="0.974" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Recall" value="0.956" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="F1 Score" value="0.965" />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
            <Card style={{ width: "100%", marginBottom: "16px" }}>
              <ConfusionMatrixChart />
            </Card>
        </Col>
        <Col span={12}>
            <Card style={{ width: "100%", marginBottom: "16px" }}>
              <ROCCurveChart />
            </Card>
        </Col>
        <Col span={12}>
            <Card style={{ width: "100%", marginBottom: "16px" }}>
              <PrecisionRecallChart />
            </Card>
        </Col>
        <Col span={12}>
            <Card style={{ width: "100%", marginBottom: "16px" }}>
              <FeatureImportanceChart />
            </Card>
        </Col>
      </Row>
    </>
  )
};

export default DashboardPage;