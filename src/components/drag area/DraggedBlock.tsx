import IBlockProps from "../../interfaces/IBlockProps";

function DraggedBlock({ name }: IBlockProps) {
  return <div className="dragged-block">{name}</div>;
}

export default DraggedBlock;
