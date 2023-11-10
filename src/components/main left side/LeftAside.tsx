import { useState } from "react";
import SelectCategory from "./SelectCategory";
import SelectCategoryRenderer from "./SelectCategoryRenderer";
import BlockViewOptions from "../../data/BlockViewOptions";
function LeftAside() {
  const [value, setValue] = useState(BlockViewOptions[0].label);
  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }
  return (
    <>
      <div className="d-flex flex-column app-side-left">
        <SelectCategory value={value} handleSelect={handleSelect} />
        <SelectCategoryRenderer value={value} />
      </div>
    </>
  );
}

export default LeftAside;
