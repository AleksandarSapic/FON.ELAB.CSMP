import { useContext } from "react";

import DraggedBlocksContext from "../../hooks/DraggedBlocksContext";
import DraggedBlock from "./DraggedBlock";
import DraggingBlockContext from "../../hooks/DraggingBlockContext";

interface DragContainerProps {
  handleDrop: (blockName: string) => void;
}

function DragContainer({ handleDrop }: DragContainerProps) {
  const blocks = useContext(DraggedBlocksContext);
  const draggingBlock = useContext(DraggingBlockContext);

  return (
    <div
      className="position-absolute drag-container"
      onDrop={(e: React.DragEvent) => {
        e.preventDefault();
        handleDrop(draggingBlock);
      }}
      onDragOver={(e: React.DragEvent) => {
        e.preventDefault();
      }}
    >
      {blocks.map((block) => (
        <DraggedBlock key={block.id} name={block.name} />
      ))}
    </div>
  );
}
export default DragContainer;
