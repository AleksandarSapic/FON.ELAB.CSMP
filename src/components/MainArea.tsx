import LeftAside from "./main left side/LeftAside";
import DragArea from "./drag area/DragArea";
import RightAside from "./main right side/RightAside";

interface MainAreaProps {
  setDraggingBlock: (draggingBlockName: string) => void;
}

function MainArea({ setDraggingBlock }: MainAreaProps) {
  return (
    <>
      <div className="d-flex main-area">
        <LeftAside setDraggingBlock={setDraggingBlock} />
        <DragArea />
        <RightAside />
      </div>
    </>
  );
}

export default MainArea;
