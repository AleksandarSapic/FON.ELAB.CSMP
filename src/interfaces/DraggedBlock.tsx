import Inputs from "./Inputs";
import Parameters from "./Parameters";

interface DraggedBlock {
  id: number;
  name: string;
  input: Inputs;
  parameter: Parameters;
  output: string;
}
export default DraggedBlock;
