import DraggedBlocks from "../../data/DraggedBlocks";

function DraggedBlocksList() {
  return (
    <>
      <div className="d-flex flex-column dragged-blocks-list">
        <span className="text-center">Blokovi</span>
        {DraggedBlocks.map((block) => (
          <div key={block.id} className="one-dragged-block-section">
            <span>{block.id}</span>
            <span>. </span>
            <span>{block.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default DraggedBlocksList;
