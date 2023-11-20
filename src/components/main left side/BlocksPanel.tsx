import BlockItems from "../../data/BlockItems";
import DraggableBlock from "./DraggableBlock";

interface BlockPanelProps {
  setDraggingBlock: (draggingBlockName: string) => void;
}

function BlocksPanel({ setDraggingBlock }: BlockPanelProps) {
  return (
    <>
      <div className="d-flex flex-wrap blocks-panel">
        {BlockItems.map((block) => (
          <DraggableBlock
            key={block.id}
            name={block.name}
            setDraggingBlock={setDraggingBlock}
          />
        ))}
      </div>
    </>
  );
}
export default BlocksPanel;
