import { createContext } from "react";

const HandleDrop = createContext(
  (blockName: string, xCoordinate: number, yCoordinate: number) => {}
);

export default HandleDrop;
