import IBlockProps from "../../interfaces/IBlockProps";

function Block({ name }: IBlockProps) {
  return <div className="text-center block">{name}</div>;
}

export default Block;
