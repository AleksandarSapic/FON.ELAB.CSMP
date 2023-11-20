import { useState } from "react";
import SelectCategory from "./SelectCategory";
import SelectCategoryRenderer from "./SelectCategoryRenderer";
import BlockViewOptions from "../../data/BlockViewOptions";

interface LeftAsideProps {
  setDraggingBlock: (draggingBlockName: string) => void;
}

function LeftAside({ setDraggingBlock }: LeftAsideProps) {
  const [value, setValue] = useState(BlockViewOptions[0].label);
  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }
  return (
    <>
      <div className="d-flex flex-column w-25 app-side-left">
        <SelectCategory value={value} handleSelect={handleSelect} />
        <SelectCategoryRenderer
          value={value}
          setDraggingBlock={setDraggingBlock}
        />
      </div>
    </>
  );
}

export default LeftAside;
