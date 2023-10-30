import { useState } from "react";
import BlocksPanel from "./BlocksPanel";
import BlocksCategoriesPanel from "./BlocksCategoriesPanel";
const blockViewOptions = [
  { id: 1, label: "sve" },
  { id: 2, label: "po grupama" },
];
function SelectCategory() {
  const [value, setValue] = useState(blockViewOptions[0].label);
  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }
  return (
    <>
      <div className="d-flex justify-content-around block-categories-section">
        <p>Prikaži</p>
        <div className="w-50 select-view-wrapper">
          <select onChange={handleSelect}>
            {blockViewOptions.map((option) => (
              <option key={option.id} value={option.label.toUpperCase()}>
                {option.label.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      {value.toLowerCase() === blockViewOptions[0].label ? (
        <BlocksPanel />
      ) : (
        <BlocksCategoriesPanel />
      )}
    </>
  );
}

export default SelectCategory;
