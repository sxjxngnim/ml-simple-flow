import Chart from "react-apexcharts";

const series = [{
  name: 'Actual Positive',
  data: [50, 5], // Predicted Positive, Predicted Negative
}, {
  name: 'Actual Negative',
  data: [3, 42], // Predicted Positive, Predicted Negative
}];

const options = {
  chart: {
    type: 'heatmap',
    zoom: {
      enabled: false
    },
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      colorScale: {
        ranges: [{
          from: 0,
          to: 10,
          color: '#f77f00',
        }, {
          from: 11,
          to: 50,
          color: '#003049',
        }],
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: ['Predicted Positive', 'Predicted Negative'],
  },
  yaxis: {
    categories: ['Actual Positive', 'Actual Negative'],
  },
  title: {
    text: 'Confusion Matrix',
  },
}

const ConfusionMatrixChart = () => {
  return (
    <Chart type="heatmap" series={series} options={options} height={350} />
  )
};

export default ConfusionMatrixChart;