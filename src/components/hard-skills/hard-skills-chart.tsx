import { useTheme } from "utils/hooks/use-theme.hook";

import ReactECharts from "echarts-for-react";

import { ChartData } from "types/hard-skill.types";

type HardSkillsChartProps = {
  xAxisData: string[];
  chartData: ChartData[];
};

const HardSkillsChart = ({ xAxisData, chartData }: HardSkillsChartProps) => {
  const { theme } = useTheme();

  const option = {
    title: {},
    tooltip: {},
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
            color: data.color,
            borderRadius: [15, 15, 0, 0]
          }
        }))
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{
        height: "100%",
        backgroundColor: theme === "dark" ? "#36373e" : "#fff",
        transition: "50ms"
      }}
      opts={{ renderer: "svg" }}
      className="c-hard-skills-chart"
    />
  );
};

export default HardSkillsChart;
