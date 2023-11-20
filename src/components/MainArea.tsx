import { useState } from "react";

import DraggedBlocksContext from "../hooks/DraggedBlocksContext";
import DraggingBlockContext from "../hooks/DraggingBlockContext";

import LeftAside from "./main left side/LeftAside";
import DragArea from "./drag area/DragArea";
import RightAside from "./main right side/RightAside";
import IDraggedBlock from "../interfaces/IDraggedBlock";

function MainArea() {
  const [blocks, addBlock] = useState<IDraggedBlock[]>([]);
  const [draggingBlock, setDraggingBlock] = useState("");

  const handleDraggingBlock = (draggingBlockName: string) => {
    setDraggingBlock(draggingBlockName);
  };

  const increment = (newBlock: IDraggedBlock) => {
    addBlock([...blocks, newBlock]);
  };

  return (
    <>
      <div className="d-flex main-area">
        <DraggedBlocksContext.Provider value={blocks}>
          <DraggingBlockContext.Provider value={draggingBlock}>
            <LeftAside setDraggingBlock={handleDraggingBlock} />
            <DragArea increment={increment} />
          </DraggingBlockContext.Provider>
          <RightAside />
        </DraggedBlocksContext.Provider>
      </div>
    </>
  );
}

export default MainArea;
