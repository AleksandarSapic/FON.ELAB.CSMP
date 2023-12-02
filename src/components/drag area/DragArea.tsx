import { useContext } from "react";
import DragContainer from "./DragContainer";

import DraggingBlockContext from "../../hooks/DraggingBlockContext";
import HandleDrop from "../../hooks/HandleDropContext";

function DragArea() {
  const draggingBlock = useContext(DraggingBlockContext);
  const handleDrop = useContext(HandleDrop);
  return (
    <div
      className="position-relative w-50 drag-area"
      onDrop={(e: React.DragEvent) => {
        e.preventDefault();
        const x = e.clientX - window.innerWidth * 0.25; //Sirina main left side sekcije
        const y = e.clientY - 70; //Visina header sekcije
        handleDrop(draggingBlock.name, x, y);
      }}
      onDragOver={(e: React.DragEvent) => {
        e.preventDefault();
      }}
    >
      <DragContainer />
    </div>
  );
}
export default DragArea;
