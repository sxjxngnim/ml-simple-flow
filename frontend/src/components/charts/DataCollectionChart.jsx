import Chart from "react-apexcharts";

const series = [{
  name: "Samples",
  data: [
    {
      x: new Date("2021-10-22T21:00:00").getTime(),
      y: 400
    },
    {
      x: new Date("2021-10-23T21:00:00").getTime(),
      y: 450
    },
    {
      x: new Date("2021-10-24T21:00:00").getTime(),
      y: 1024,
    },
    {
      x: new Date("2021-10-25T21:00:00").getTime(),
      y: 1025,
    }
  ]  
}]

const options = {
  chart: {
    id: "basic-bar",
    zoom: {
      enabled: false
    },
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    type: "datetime"
  }
};

const DatasetSampleChart = () => {
  return (
    <Chart type="line" series={series} options={options} height="250px" />
  );
};

export default DatasetSampleChart;