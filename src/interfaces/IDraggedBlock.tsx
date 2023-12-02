import IInputs from "./IInputs";
import IParameters from "./IParameters";

interface IDraggedBlock {
  id: number;
  name: string;
  input: IInputs;
  parameter: IParameters;
  output: IDraggedBlock | null;
  x: number;
  y: number;
}
export default IDraggedBlock;
