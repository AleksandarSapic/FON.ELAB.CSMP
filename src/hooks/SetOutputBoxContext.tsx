import { createContext } from "react";
import IDraggedBlock from "../interfaces/IDraggedBlock";

interface OutputBoxContextState {
  outputBox: {
    showBox: boolean;
    block: IDraggedBlock | null;
    availableInputs: {
      input1: boolean;
      input2: boolean;
      input3: boolean;
    };
  };
  setOutputBox: React.Dispatch<
    React.SetStateAction<{
      showBox: boolean;
      block: IDraggedBlock | null;
      availableInputs: {
        input1: boolean;
        input2: boolean;
        input3: boolean;
      };
    }>
  >;
}

const SetOutputBoxContext = createContext<OutputBoxContextState>({
  outputBox: {
    showBox: false,
    block: null,
    availableInputs: {
      input1: false,
      input2: false,
      input3: false,
    },
  },
  setOutputBox: () => {},
});

export default SetOutputBoxContext;
