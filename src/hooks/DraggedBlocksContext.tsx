import { createContext } from "react";
import IDraggedBlock from "../interfaces/IDraggedBlock";

const DraggedBlocksContext = createContext<IDraggedBlock[]>([]);

export default DraggedBlocksContext;
