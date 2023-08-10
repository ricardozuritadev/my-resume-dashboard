import { TFunction } from "i18next";

import { EXPERIENCE } from "constants/experience.constants";

import { ChartData } from "types/hard-skill.types";
import { months } from "./data/months";

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

export const getSkillsChartSeries = (chartData: ChartData[]) => [
  {
    type: "bar",
    data: chartData.map((data) => ({
      value: data.value,
      itemStyle: {
        color: {
          type: "linear",
          x: 0.3,
          y: 1.1,
          colorStops: [
            {
              offset: 0,
              color: data.colors[0]
            },
            {
              offset: 0.5,
              color: data.colors[1]
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
];

export const getEducationChartSeries = () => [
  {
    name: "Año de inicio",
    type: "bar",
    stack: "Total",
    barWidth: 40,
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
    data: [2012, 2016, 2020, 2021, 2022]
  },
  {
    name: "Años de estudio",
    type: "bar",
    stack: "Total",
    label: {
      show: false,
      formatter: "{b}"
    },
    data: [
      {
        value: 3,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0.8,
            colorStops: [
              {
                offset: 0,
                color: "#751db6"
              },
              {
                offset: 1,
                color: "#a02cfa"
              }
            ]
          },
          borderRadius: [30, 30, 30, 30]
        }
      },
      {
        value: 1,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0.8,
            colorStops: [
              {
                offset: 0,
                color: "#cc920b"
              },
              {
                offset: 1,
                color: "#ffbc11"
              }
            ]
          },
          borderRadius: [30, 30, 30, 30]
        }
      },
      {
        value: 1,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0.8,
            colorStops: [
              {
                offset: 0,
                color: "#a51e7a"
              },
              {
                offset: 1,
                color: "#df28a1"
              }
            ]
          },
          borderRadius: [30, 30, 30, 30]
        }
      },
      {
        value: 1,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0.8,
            colorStops: [
              {
                offset: 0,
                color: "#1e9140"
              },
              {
                offset: 1,
                color: "#27bc48"
              }
            ]
          },
          borderRadius: [30, 30, 30, 30]
        }
      },
      {
        value: 2,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0.8,
            colorStops: [
              {
                offset: 0,
                color: "#751db6"
              },
              {
                offset: 1,
                color: "#a02cfa"
              }
            ]
          },
          borderRadius: [30, 30, 30, 30]
        }
      }
    ]
  }
];

export const calculateExperienceDuration = (
  initialDate: string,
  endDate: string | null,
  t: TFunction<"translation", undefined>
): string | null => {
  if (!endDate) return null;

  const start = new Date(initialDate);
  const end = new Date(endDate);

  const yearsDifference = end.getFullYear() - start.getFullYear();
  const monthDifference =
    yearsDifference * 12 + (end.getMonth() - start.getMonth());

  if (monthDifference >= 12) return `${yearsDifference} ${t(EXPERIENCE.YEAR)}`;

  return `${monthDifference + 1} ${t(EXPERIENCE.MONTH)}`;
};

export const formatDates = (
  date: string,
  t: TFunction<"translation", undefined>
) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = t(months[newDate.getMonth()]);

  return `${month} ${year}`;
};
