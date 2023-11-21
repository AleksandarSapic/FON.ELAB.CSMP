import { createContext } from "react";
import IDraggedBlock from "../interfaces/IDraggedBlock";

const AddDraggedBlockContext = createContext((newBlock: IDraggedBlock) => {});

export default AddDraggedBlockContext;
