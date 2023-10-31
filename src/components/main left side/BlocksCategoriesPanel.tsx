import { useState } from "react";
import BlockItems from "../../data/BlockItems";
import BlockCategories from "../../data/BlockCategories";
import BlockCategoriesButton from "./BlockCategoriesButton";
import CategoryItemsSection from "./CategoryItemsSection";

function BlocksCategoriesPanel() {
  const [activeSection, setActiveSection] = useState(BlockCategories[0]);
  function handleButtonClick(category: string) {
    setActiveSection(category);
  }
  return (
    <>
      <div className="d-flex flex-column blocks-categories-panel">
        {BlockCategories.map((category) => (
          <div
            key={category}
            className="d-flex flex-column text-center block-category"
          >
            <BlockCategoriesButton
              category={category}
              onClick={handleButtonClick}
            />
            <CategoryItemsSection
              category={category}
              activeSection={activeSection}
              blockItems={BlockItems}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default BlocksCategoriesPanel;
