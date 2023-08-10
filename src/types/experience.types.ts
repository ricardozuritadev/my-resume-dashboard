export enum Position {
  developer = "developer",
  teacher = "teacher"
}

export type Experience = {
  id: string;
  company: string;
  logo: string;
  initialDate: string;
  endDate: string | null;
  description: string;
  position: string;
  positionIcon: Position;
  responsibilities: string;
  appliedSkills: string[];
  learning: string;
  challenges: string;
  logoSecondary?: string;
};
