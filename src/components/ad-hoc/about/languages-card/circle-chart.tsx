import { useEffect, useState } from "react";
import { useTheme } from "utils/hooks/use-theme.hook";

type CircleChartProps = {
  endValue: number;
  topText?: string;
  bottomText?: string;
};

const CircleChart = ({
  endValue = 100,
  topText,
  bottomText
}: CircleChartProps) => {
  const [startValue, setStartValue] = useState<number>(0);
  const { theme } = useTheme();

  const backgroundColorStyle = `conic-gradient(#a02cfa ${
    startValue * 3.6
  }deg, ${theme === "dark" ? "#2e2b2b" : "#efefef"} 0deg)`;

  useEffect(() => {
    const progress = setInterval(() => {
      setStartValue(startValue + 1);
    }, 5);

    if (startValue >= endValue) clearInterval(progress);

    return () => clearInterval(progress);
  }, [startValue, endValue]);

  return (
    <div className="container">
      {topText && <h3>{topText}</h3>}

      <div
        className="c-circle-chart"
        style={{
          background: backgroundColorStyle,
          transition: "100ms"
        }}
      >
        <div className="c-circle-chart__wrapper">
          <span className="c-circle-chart__value">{startValue}%</span>
        </div>
      </div>

      {bottomText && <h3>{bottomText}</h3>}
    </div>
  );
};

export default CircleChart;
