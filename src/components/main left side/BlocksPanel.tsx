import BlockItems from "../../data/BlockItems";
import Block from "./Block";

function BlocksPanel() {
  return (
    <>
      <div className="d-flex flex-wrap blocks-panel">
        {BlockItems.map((block) => (
          <Block key={block.id} name={block.name} />
        ))}
      </div>
    </>
  );
}
export default BlocksPanel;
