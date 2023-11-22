import { useState, useContext, ChangeEvent } from "react";

import ShowSetBoxContext from "../../hooks/ShowSetBoxContext";
import AddDraggedBlockContext from "../../hooks/AddDraggedBlockContext";
import DraggingBlockContext from "../../hooks/DraggingBlockContext";
import DraggedBlocksContext from "../../hooks/DraggedBlocksContext";

import InputParametersSection from "./InputParametersSection";
import SetParametersButtonsSection from "./SetParametersButtonsSection";

import BlockItems from "../../data/BlockItems";

function SetParametersMainSection() {
  const [formData, setFormData] = useState({
    parametar1: "0",
    parametar2: "0",
    parametar3: "0",
  });

  const showSetBox = useContext(ShowSetBoxContext);
  const addBlock = useContext(AddDraggedBlockContext);
  const draggingBlock = useContext(DraggingBlockContext);
  const blocks = useContext(DraggedBlocksContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSetBox(false);
    const selectedBlock = BlockItems.find(
      (block) => block.name === draggingBlock
    );
    addBlock({
      id: blocks.length + 1,
      name: draggingBlock,
      input: {
        input1: "Default Input",
        input2: null,
        input3: null,
      },
      parameter: {
        parameter1: selectedBlock?.formView.parametar1.readonly
          ? null
          : +formData.parametar1,
        parameter2: selectedBlock?.formView.parametar2.readonly
          ? null
          : +formData.parametar2,
        parameter3: selectedBlock?.formView.parametar3.readonly
          ? null
          : +formData.parametar3,
      },
      output: "Default Output",
    });
  };

  const handleDecline = () => {
    showSetBox(false);
  };

  return (
    <div className="d-flex flex-column">
      <span className="align-self-end">Napomena</span>
      <form method="post" onSubmit={handleSubmit} onReset={handleDecline}>
        <InputParametersSection
          handleInputChange={handleInputChange}
          formData={formData}
        />
        <SetParametersButtonsSection />
      </form>
    </div>
  );
}

export default SetParametersMainSection;
