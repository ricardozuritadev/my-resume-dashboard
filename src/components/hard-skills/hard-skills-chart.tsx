import ReactECharts from "echarts-for-react";

type HardSkillsChartProps = {
  xAxisData: string[];
  seriesData: number[];
};

const HardSkillsChart = ({ xAxisData, seriesData }: HardSkillsChartProps) => {
  const option = {
    title: {},
    tooltip: {},
    legend: {},
    xAxis: {
      data: xAxisData
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        data: seriesData
      }
    ]
  };
  return (
    <ReactECharts
      option={option}
      style={{ height: 350 }}
      opts={{ renderer: "svg" }}
      className="c-hard-skills-chart"
    />
  );
};

export default HardSkillsChart;
