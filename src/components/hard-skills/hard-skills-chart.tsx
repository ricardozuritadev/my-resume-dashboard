import { useTheme } from "utils/hooks/use-theme.hook";

import ReactECharts from "echarts-for-react";

import { getChartOptions } from "utils/functions";

import { ChartData } from "types/hard-skill.types";

type HardSkillsChartProps = {
  xAxisData: string[];
  chartData: ChartData[];
};

const HardSkillsChart = ({ xAxisData, chartData }: HardSkillsChartProps) => {
  const { theme } = useTheme();

  const chartOption = getChartOptions(xAxisData, chartData);
  const backgroundStyle = theme === "dark" ? "#1f1d1d" : "#fff";

  return (
    <ReactECharts
      option={chartOption}
      style={{
        height: "100%",
        background: backgroundStyle,
        transition: "50ms"
      }}
      opts={{ renderer: "svg" }}
      className="c-hard-skills-chart"
    />
  );
};

export default HardSkillsChart;
