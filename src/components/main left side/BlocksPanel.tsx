import BlockItems from "../../data/BlockItems";
import DraggableBlock from "./DraggableBlock";

function BlocksPanel() {
  return (
    <>
      <div className="d-flex flex-wrap blocks-panel">
        {BlockItems.map((block) => (
          <DraggableBlock key={block.id} name={block.name} />
        ))}
      </div>
    </>
  );
}
export default BlocksPanel;
