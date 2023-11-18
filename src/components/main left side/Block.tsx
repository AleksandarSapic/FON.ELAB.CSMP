import IBlockProps from "../../interfaces/IBlockProps";

function Block({ name }: IBlockProps) {
  return <div className="col-4 block">{name}</div>;
}

export default Block;
