import { useTheme } from "utils/hooks/use-theme.hook";

import ReactECharts from "echarts-for-react";
import { getEducationChartSeries } from "utils/functions";

const EducationTimeline = () => {
  const { theme } = useTheme();

  const backgroundStyle = theme === "dark" ? "#1f1d1d" : "#fff";

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      top: 40,
      bottom: 30
    },
    xAxis: {
      type: "value",
      position: "top",
      min: 2012,
      max: 2024,
      axisLabel: {
        formatter: (value: number) => value.toFixed(0),
        fontSize: 14
      },
      splitLine: {
        lineStyle: { color: theme === "dark" ? "#424040" : "#edebef" }
      }
    },
    yAxis: {
      type: "category",
      axisLine: { show: false },
      axisLabel: { show: true },
      axisTick: { show: false },
      splitLine: { show: false },
      data: ["UDLA", "Trazos", "CEI", "The Bridge", "IFP / Ilerna"]
    },
    series: getEducationChartSeries()
  };

  return (
    <div className="c-education-timeline">
      <section className="c-education-timeline__chart">
        <div>Education</div>
        <ReactECharts
          option={option}
          style={{
            background: backgroundStyle,
            transition: "50ms"
          }}
          opts={{ renderer: "svg" }}
          //   className="c-hard-skills-chart"
        />
      </section>
      <section></section>
    </div>
  );
};

export default EducationTimeline;
