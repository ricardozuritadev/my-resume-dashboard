import { TagColor } from "types/tag.types";

type TagProps = {
  text: string;
  hasRandomColor?: boolean;
};

const Tag = ({ text, hasRandomColor }: TagProps) => {
  const colorKeys = Object.keys(TagColor);
  const randomIndex = Math.floor(Math.random() * colorKeys.length);
  const randomColor = TagColor[colorKeys[randomIndex] as keyof typeof TagColor];

  const tagClassName = `c-tag ${hasRandomColor ? `c-tag__${randomColor}` : ""}`;

  return <div className={tagClassName}>{text}</div>;
};

export default Tag;
