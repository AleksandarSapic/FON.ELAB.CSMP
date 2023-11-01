import DraggableBlock from "./DraggableBlock";
import { DndContext } from "@dnd-kit/core";

interface BlockItem {
  id: number;
  category: string;
  name: string;
}

interface CategoryItemsSectionProps {
  category: string;
  activeSection: string;
  blockItems: BlockItem[];
}

function CategoryItemsSection({
  category,
  activeSection,
  blockItems,
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
          <DndContext key={item.id}>
            <DraggableBlock key={item.id} name={item.name} />
          </DndContext>
        ))}
    </div>
  );
}

export default CategoryItemsSection;
