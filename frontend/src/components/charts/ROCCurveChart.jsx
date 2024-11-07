import Chart from 'react-apexcharts';

const series = [{
  name: 'ROC Curve',
  data: [
    [0.0, 0.0],
    [0.1, 0.7],
    [0.2, 0.85],
    [0.3, 0.9],
    [1.0, 1.0],
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
      text: 'False Positive Rate',
    },
  },
  yaxis: {
    title: {
      text: 'True Positive Rate',
    },
  },
  title: {
    text: 'ROC Curve',
  },
};

const ROCCurveChart = () => {
  return (
    <Chart type="line" series={series} options={options} height={350} />
  )
};

export default ROCCurveChart;