import { useState } from "react";
import DraggedBlocksContext from "../hooks/DraggedBlocksContext";
import LeftAside from "./main left side/LeftAside";
import DragArea from "./drag area/DragArea";
import RightAside from "./main right side/RightAside";
import IDraggedBlock from "../interfaces/IDraggedBlock";

function MainArea() {
  const [blocks, addBlock] = useState<IDraggedBlock[]>([]);

  const increment = (newBlock: IDraggedBlock) => {
    addBlock([...blocks, newBlock]);
  };

  return (
    <>
      <div className="d-flex main-area">
        <LeftAside />
        <DraggedBlocksContext.Provider value={blocks}>
          <DragArea increment={increment} />
          <RightAside />
        </DraggedBlocksContext.Provider>
      </div>
    </>
  );
}

export default MainArea;
