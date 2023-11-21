import { createContext } from "react";

const FormContext = createContext({
  parametar1: {
    title: "Parametar 1",
    readonly: false,
  },
  parametar2: {
    title: "Parametar 2",
    readonly: false,
  },
  parametar3: {
    title: "Parametar 3",
    readonly: false,
  },
});

export default FormContext;
