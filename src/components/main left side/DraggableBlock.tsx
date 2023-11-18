import { useDraggable } from "@dnd-kit/core";
import Block from "./Block";
import BlockProps from "../../interfaces/IBlockProps";

function DraggableBlock({ name }: BlockProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      className="col-4"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <Block name={name} />
    </div>
  );
}

export default DraggableBlock;
