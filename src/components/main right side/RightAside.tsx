import DraggedBlockInfo from "./DraggedBlockInfo";
import DraggedBlocksList from "./DraggedBlocksList";

function RightAside() {
  return (
    <>
      <div className="app-side-right">
        <DraggedBlocksList />
        <DraggedBlockInfo />
      </div>
    </>
  );
}

export default RightAside;
