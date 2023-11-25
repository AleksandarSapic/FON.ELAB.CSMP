import { useContext } from "react";
import DraggedBlocksContext from "../../hooks/DraggedBlocksContext";
import SetSelectedDraggedBlockContext from "../../hooks/SetSelectedDraggedBlockContext";

function DraggedBlocksList() {
  const blocks = useContext(DraggedBlocksContext);
  const callSetSelectedBlock = useContext(SetSelectedDraggedBlockContext);

  function setSelectedBlock(id: number) {
    const block = blocks.find((block) => block.id === id);
    if (block !== undefined) {
      callSetSelectedBlock(block);
    }
  }

  return (
    <>
      <div className="d-flex flex-column dragged-blocks-list">
        <span className="position-sticky text-center dragged-blocks-list-title">
          Blokovi
        </span>
        {blocks.map((block) => (
          <div key={block.id} className="one-dragged-block-section">
            <span
              onClick={() => setSelectedBlock(block.id)}
            >{`${block.id}. ${block.name}`}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default DraggedBlocksList;
