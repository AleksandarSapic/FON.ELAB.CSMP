import { createContext } from "react";
import ErrorMessages from "../data/ErrorMessages";

interface ErrorBoxContextState {
  errorBox: {
    showBox: boolean;
    blockName: string;
    blockInputs: number;
    resetFunction: boolean;
    errorType: string;
  };
  setErrorBox: React.Dispatch<
    React.SetStateAction<{
      showBox: boolean;
      blockName: string;
      blockInputs: number;
      resetFunction: boolean;
      errorType: string;
    }>
  >;
}

const ErrorBoxContext = createContext<ErrorBoxContextState>({
  errorBox: {
    showBox: false,
    blockName: "Ime bloka",
    blockInputs: 0,
    resetFunction: false,
    errorType: ErrorMessages.default,
  },
  setErrorBox: () => {},
});

export default ErrorBoxContext;
