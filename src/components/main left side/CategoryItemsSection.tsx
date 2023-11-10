import Block from "./Block";

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
          <Block key={item.id} name={item.name} />
        ))}
    </div>
  );
}

export default CategoryItemsSection;
