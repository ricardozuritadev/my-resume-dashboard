import { useTheme } from "utils/hooks/use-theme.hook";

import ReactECharts from "echarts-for-react";

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
        formatter: (value: number) => value.toFixed(0)
      }
    },
    yAxis: {
      type: "category",
      axisLine: { show: false },
      axisLabel: { show: true },
      axisTick: { show: false },
      splitLine: { show: false },
      data: [
        "UDLA",
        "Trazos",
        "CEI",
        "The Bridge",
        "Three.js Journey",
        "IFP / Ilerna"
      ]
    },
    series: [
      {
        name: "Placeholder",
        type: "bar",
        stack: "Total",
        itemStyle: {
          borderColor: "transparent",
          color: "transparent"
        },
        emphasis: {
          itemStyle: {
            borderColor: "transparent",
            color: "transparent"
          }
        },
        data: [2012, 2016, 2020, 2021, 2022, 2022]
      },
      {
        name: "Years",
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          formatter: "{b}"
        },
        data: [3, 1, 1, 1, 2, 2]
      }
    ]
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
