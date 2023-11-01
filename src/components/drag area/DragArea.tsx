import DragContainer from "./DragContainer";
import { DndContext } from "@dnd-kit/core";

function DragArea() {
  return (
    <DndContext>
      <div className="drag-area">
        <DragContainer />
      </div>
    </DndContext>
  );
}
export default DragArea;
