import { createContext } from "react";
import IDraggedBlock from "../interfaces/IDraggedBlock";

const SelectedDraggedBlockContext = createContext<IDraggedBlock>({
  id: 0,
  name: "Naziv elementa",
  input: {
    input1: null,
    input3: null,
    input2: null,
  },
  parameter: {
    parameter1: null,
    parameter2: null,
    parameter3: null,
  },
  output: null,
});

export default SelectedDraggedBlockContext;
