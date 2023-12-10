import { createContext } from "react";
import IDraggedBlock from "../interfaces/IDraggedBlock";

interface ConnectionBlocksContextState {
  connectionBlocks: [IDraggedBlock | null, IDraggedBlock | null];
  setConnectionBlocks: React.Dispatch<
    React.SetStateAction<[IDraggedBlock | null, IDraggedBlock | null]>
  >;
}

const ConnectionBlocksContext = createContext<ConnectionBlocksContextState>({
  connectionBlocks: [null, null],
  setConnectionBlocks: () => {},
});

export default ConnectionBlocksContext;
