import { useContext } from "react";
import DraggedBlocksContext from "../../hooks/DraggedBlocksContext";

function DraggedBlocksList() {
  const blocks = useContext(DraggedBlocksContext);
  return (
    <>
      <div className="d-flex flex-column dragged-blocks-list">
        <span className="dragged-blocks-list-title text-center">Blokovi</span>
        {blocks.map((block) => (
          <div key={block.id} className="one-dragged-block-section">
            <span>{`${block.id}. ${block.name}`}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default DraggedBlocksList;
