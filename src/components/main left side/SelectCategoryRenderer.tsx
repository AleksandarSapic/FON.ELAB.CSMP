import BlocksPanel from "./BlocksPanel";
import BlocksCategoriesPanel from "./BlocksCategoriesPanel";

interface SelectCategoryRendererProps {
  value: string;
}

function SelectCategoryRenderer({ value }: SelectCategoryRendererProps) {
  return (
    <>
      {value.toLowerCase() === "sve" ? (
        <BlocksPanel />
      ) : (
        <BlocksCategoriesPanel />
      )}
    </>
  );
}

export default SelectCategoryRenderer;
