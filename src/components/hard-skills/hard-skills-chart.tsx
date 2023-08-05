import ReactECharts from "echarts-for-react";
import { ChartData } from "types/hard-skill.types";
import { useTheme } from "utils/hooks/use-theme.hook";

type HardSkillsChartProps = {
  xAxisData: string[];
  chartData: ChartData[];
};

const HardSkillsChart = ({ xAxisData, chartData }: HardSkillsChartProps) => {
  const { theme } = useTheme();

  const option = {
    title: { title: "Hard Skills" },
    tooltip: {},
    legend: {},
    xAxis: {
      data: xAxisData
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        data: chartData.map((data) => ({
          value: data.value,
          itemStyle: {
            color: data.color
          }
        }))
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{
        height: 300,
        backgroundColor: theme === "dark" ? "#36373e" : "#fff",
        transition: "50ms"
      }}
      opts={{ renderer: "svg" }}
      theme={"light"}
      className="c-hard-skills-chart"
    />
  );
};

export default HardSkillsChart;
