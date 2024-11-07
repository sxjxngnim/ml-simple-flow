import Chart from "react-apexcharts";

const series = [{
  name: 'Precision-Recall Curve',
  data: [
    [0.0, 1.0],
    [0.1, 0.95],
    [0.2, 0.9],
    [0.3, 0.85],
    [1.0, 0.0],
  ],
}];

const options = {
  chart: {
    type: 'line',
    height: 350,
    zoom: {
      enabled: false
    },
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    title: {
      text: 'Recall',
    },
  },
  yaxis: {
    title: {
      text: 'Precision',
    },
  },
  title: {
    text: 'Precision-Recall Curve',
  },
};

const PrecisionRecallChart = () => {
  return (
    <Chart type="line" series={series} options={options} height={350} />
  )
};

export default PrecisionRecallChart;