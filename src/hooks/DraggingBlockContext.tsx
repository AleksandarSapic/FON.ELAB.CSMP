import { createContext } from "react";

const DraggingBlockContext = createContext({ name: "", x: 0, y: 0 });

export default DraggingBlockContext;
