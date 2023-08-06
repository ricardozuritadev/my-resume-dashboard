import { ChartData } from "types/hard-skill.types";

type HardSkillCardProps = {
  title: string;
  items: string[];
  icons: JSX.Element[];
  chartData: ChartData[];
  index: number;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  setXAxisData: React.Dispatch<React.SetStateAction<string[]>>;
  setChartData: React.Dispatch<React.SetStateAction<ChartData[]>>;
};

const HardSkillCard = ({
  title,
  items,
  icons,
  chartData,
  index,
  selectedIndex,
  setSelectedIndex,
  setXAxisData,
  setChartData
}: HardSkillCardProps) => {
  const selectHardSkill = () => {
    setXAxisData(items);
    setChartData(chartData);
    setSelectedIndex(index);
  };

  return (
    <div
      className="c-hard-skill-card"
      style={
        selectedIndex === index
          ? { border: `3px solid ${chartData[0].color}` }
          : {}
      }
      onClick={selectHardSkill}
    >
      <p className="c-hard-skill-card__title">{title}</p>
      <div className="c-hard-skill-card__icons">{icons}</div>
    </div>
  );
};

export default HardSkillCard;
