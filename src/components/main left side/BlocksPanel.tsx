import DraggableBlock from "./DraggableBlock";
import BlockItems from "../../data/BlockItems";
import { DndContext } from "@dnd-kit/core";
function BlocksPanel() {
  return (
    <>
      <div className="d-flex flex-wrap blocks-panel">
        {BlockItems.map((block) => (
          <DndContext key={block.id}>
            <DraggableBlock key={block.id} name={block.name} />
          </DndContext>
        ))}
      </div>
    </>
  );
}
export default BlocksPanel;
