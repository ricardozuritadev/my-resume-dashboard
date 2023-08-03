import { useEffect, useState } from "react";

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
          background: `conic-gradient(#242529 ${
            startValue * 3.6
          }deg, #b1acaa 0deg)`
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
