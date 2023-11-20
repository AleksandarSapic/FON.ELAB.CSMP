import DraggableBlock from "./DraggableBlock";

interface BlockItem {
  id: number;
  category: string;
  name: string;
}
interface CategoryItemsSectionProps {
  category: string;
  activeSection: string;
  blockItems: BlockItem[];
  setDraggingBlock: (draggingBlockName: string) => void;
}

function CategoryItemsSection({
  category,
  activeSection,
  blockItems,
  setDraggingBlock,
}: CategoryItemsSectionProps) {
  return (
    <div
      className={`category-items-section ${
        activeSection === category ? "active-category-section" : ""
      }`}
    >
      {blockItems
        .filter((block) => block.category === category)
        .map((item) => (
          <DraggableBlock
            key={item.id}
            name={item.name}
            setDraggingBlock={setDraggingBlock}
          />
        ))}
    </div>
  );
}

export default CategoryItemsSection;
