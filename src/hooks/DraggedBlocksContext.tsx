import { createContext } from "react";
import IDraggedBlock from "../interfaces/IDraggedBlock";

interface IDraggedBlocksContext {
  blocks: IDraggedBlock[];
  setBlocks: React.Dispatch<React.SetStateAction<IDraggedBlock[]>>;
}

const defaultDraggedBlocksContext: IDraggedBlocksContext = {
  blocks: [],
  setBlocks: () => {},
};

const DraggedBlocksContext = createContext<IDraggedBlocksContext>(
  defaultDraggedBlocksContext
);
export default DraggedBlocksContext;
