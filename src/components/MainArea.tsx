import LeftAside from "./main left side/LeftAside";
import DragArea from "./drag area/DragArea";
import RightAside from "./main right side/RightAside";

function MainArea() {
  return (
    <>
      <div className="d-flex main-area">
        <LeftAside /> <DragArea />
        <RightAside />
      </div>
    </>
  );
}

export default MainArea;
