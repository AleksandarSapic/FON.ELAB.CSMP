import BlocksPanel from "./BlocksPanel";
import BlocksCategoriesPanel from "./BlocksCategoriesPanel";

interface SelectCategoryRendererProps {
  value: string;
  setDraggingBlock: (draggingBlockName: string) => void;
}

function SelectCategoryRenderer({
  value,
  setDraggingBlock,
}: SelectCategoryRendererProps) {
  return (
    <>
      {value.toLowerCase() === "sve" ? (
        <BlocksPanel setDraggingBlock={setDraggingBlock} />
      ) : (
        <BlocksCategoriesPanel setDraggingBlock={setDraggingBlock} />
      )}
    </>
  );
}

export default SelectCategoryRenderer;
