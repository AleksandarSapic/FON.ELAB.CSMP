import DraggedBlockInfo from "./DraggedBlockInfo";
import DraggedBlocksList from "./DraggedBlocksList";

function RightAside() {
  return (
    <>
      <div className="d-flex flex-column app-side-right">
        <DraggedBlocksList />
        <DraggedBlockInfo />
      </div>
    </>
  );
}

export default RightAside;
