export enum GradientColor {
  purple = "purple",
  yellow = "yellow",
  pink = "pink",
  green = "green"
}

export type SoftSkill = {
  id: string;
  text: string;
  svg: string;
  gradientColor: GradientColor;
};
