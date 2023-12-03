import { useContext, useState } from "react";
import DragContainer from "./DragContainer";

import DraggingBlockContext from "../../hooks/DraggingBlockContext";
import HandleDrop from "../../hooks/HandleDropContext";

function DragArea() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const currentScrollX = event.currentTarget.scrollLeft;
    const currentScrollY = event.currentTarget.scrollTop;

    setScrollX(currentScrollX);
    setScrollY(currentScrollY);
  };
  const draggingBlock = useContext(DraggingBlockContext);
  const handleDrop = useContext(HandleDrop);

  return (
    <div
      className="position-relative w-50 drag-area"
      onDrop={(e: React.DragEvent) => {
        e.preventDefault();
        const x = e.clientX - window.innerWidth * 0.25 + scrollX; //Sirina main left side sekcije i pozicija diva nakon scrolla po X
        const y = e.clientY - 70 + scrollY; //Visina header sekcije i pozicija diva nakon scrolla po Y
        handleDrop(draggingBlock.name, x, y);
      }}
      onDragOver={(e: React.DragEvent) => {
        e.preventDefault();
      }}
      onScroll={handleScroll}
    >
      <DragContainer />
    </div>
  );
}
export default DragArea;
