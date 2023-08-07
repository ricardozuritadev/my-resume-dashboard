import { ChartData } from "types/hard-skill.types";

export const handleDownloadResume = (url: string) => {
  const fileName = url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.target = "_blank";
  aTag.setAttribute("download", fileName || "cv_ricardozurita_es.pdf");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

export const getChartOptions = (
  xAxisData: string[],
  chartData: ChartData[]
) => ({
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
            type: "linear",
            x: 0.3,
            y: 3,
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
});
