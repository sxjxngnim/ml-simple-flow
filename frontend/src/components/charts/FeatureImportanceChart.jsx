import Chart from "react-apexcharts";

const series = [{
  data: [
    { x: 'Feature A', y: 0.35 },
    { x: 'Feature B', y: 0.25 },
    { x: 'Feature C', y: 0.15 },
    // Thêm các đặc trưng khác
  ],
}];

const options = {
  chart: {
    type: 'bar',
    height: 350,
    zoom: {
      enabled: false
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  xaxis: {
    title: {
      text: 'Importance',
    },
  },
  yaxis: {
    title: {
      text: 'Feature',
    },
  },
  title: {
    text: 'Feature Importance',
  },
};

const FeatureImportanceChart = () => {
  return (
    <Chart type="bar" series={series} options={options} height={350} />
  )
};

export default FeatureImportanceChart;