type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  return <div className="c-tag">{text}</div>;
};

export default Tag;
