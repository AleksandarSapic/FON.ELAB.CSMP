import { createContext } from "react";
import IDraggedBlock from "../interfaces/IDraggedBlock";

const SetSelectedDraggedBlockContext = createContext(
  (block: IDraggedBlock) => {}
);

export default SetSelectedDraggedBlockContext;
