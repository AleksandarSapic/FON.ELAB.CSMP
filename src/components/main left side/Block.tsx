import IBlockProps from "../../interfaces/IBlockProps";

function Block({ name }: IBlockProps) {
  return <div className="block">{name}</div>;
}

export default Block;
