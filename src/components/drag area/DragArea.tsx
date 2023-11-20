import DragContainer from "./DragContainer";
import IDragAreaFunctionProp from "../../interfaces/IDragAreaFunctionProp";

function DragArea({ increment }: IDragAreaFunctionProp) {
  return (
    <div className="w-50 drag-area">
      <DragContainer increment={increment} />
    </div>
  );
}
export default DragArea;
