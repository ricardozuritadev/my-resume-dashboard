export type ChartData = {
  value: number;
  color: string;
};

export type HardSkill = {
  id: string;
  title: string;
  items: string[];
  icons: JSX.Element[];
  data: ChartData[];
};
