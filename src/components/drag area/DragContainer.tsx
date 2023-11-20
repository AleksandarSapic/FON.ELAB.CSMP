import { useContext } from "react";

import DraggingBlockContext from "../../hooks/DraggingBlockContext";
import DraggedBlocksContext from "../../hooks/DraggedBlocksContext";
import DraggedBlock from "./DraggedBlock";
import IDragAreaFunctionProp from "../../interfaces/IDragAreaFunctionProp";

function DragContainer({ increment }: IDragAreaFunctionProp) {
  const blocks = useContext(DraggedBlocksContext);
  const draggingBlock = useContext(DraggingBlockContext);

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    increment({
      id: blocks.length + 1,
      name: draggingBlock,
      input: {
        input1: "Default Input",
        input2: null,
        input3: null,
      },
      parameter: {
        parameter1: 0,
        parameter2: null,
        parameter3: 0,
      },
      output: "Default Output",
    });
  }

  return (
    <div
      className="drag-container"
      onDrop={handleDrop}
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
