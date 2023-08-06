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
            color: {
              type: "radial",
              x: 0.4,
              y: 0.3,
              r: 1,
              colorStops: [
                {
                  offset: 0,
                  color: data.colors[0]
                },
                {
                  offset: 1,
                  color: data.colors[1]
                }
              ]
            },
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
        backgroundColor: theme === "dark" ? "#1f1d1d" : "#fff",
        transition: "50ms"
      }}
      opts={{ renderer: "svg" }}
      className="c-hard-skills-chart"
    />
  );
};

export default HardSkillsChart;
