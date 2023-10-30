import { useState } from "react";
import BlockItems from "./BlockItems";
import Block from "./Block";
const blockCategories = [
  "Razno",
  "Osnovni matematički",
  "Trigonometrija",
  "Generatori",
  "Ograničavači",
];

function BlocksCategoriesPanel() {
  const [activeSection, setActiveSection] = useState(blockCategories[0]);
  function handleButtonClick(category: string) {
    setActiveSection(category);
  }
  return (
    <>
      <div className="d-flex flex-column blocks-categories-panel">
        {blockCategories.map((category) => (
          <div
            key={category}
            className="d-flex flex-column text-center block-category"
          >
            <button onClick={() => handleButtonClick(category)}>
              {category}
            </button>
            <div
              className={`category-items-section ${
                activeSection === category ? "active-category-section" : ""
              }`}
            >
              {BlockItems.filter((block) => block.category === category).map(
                (item) => (
                  <Block key={item.id} name={item.name} />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlocksCategoriesPanel;
