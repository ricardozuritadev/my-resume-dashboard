import { useTheme } from "utils/hooks/use-theme.hook";
import { useTranslation } from "react-i18next";

import ReactECharts from "echarts-for-react";
import { getEducationChartSeries } from "utils/functions";

const EducationTimeline = () => {
  const { t } = useTranslation();
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
    series: getEducationChartSeries(t)
  };

  return (
    <div className="c-education-timeline">
      <section className="c-education-timeline__chart">
        <ReactECharts
          option={option}
          style={{
            background: backgroundStyle,
            transition: "50ms"
          }}
          opts={{ renderer: "svg" }}
        />
      </section>
      <section></section>
    </div>
  );
};

export default EducationTimeline;
