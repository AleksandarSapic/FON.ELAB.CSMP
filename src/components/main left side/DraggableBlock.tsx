import Block from "./Block";
import BlockProps from "../../interfaces/IBlockProps";

function DraggableBlock({ name }: BlockProps) {
  return (
    <div className="col-4" draggable="true">
      <Block name={name} />
    </div>
  );
}

export default DraggableBlock;
