import Block from "./Block";

interface DraggableBlockProps {
  name: string;
  setDraggingBlock: (draggingBlockName: string) => void;
}

function DraggableBlock({ name, setDraggingBlock }: DraggableBlockProps) {
  return (
    <div
      className="col-4"
      onDragStart={() => setDraggingBlock(name)}
      draggable="true"
    >
      <Block name={name} />
    </div>
  );
}

export default DraggableBlock;
