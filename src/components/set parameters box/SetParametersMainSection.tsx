import { useState, useContext, ChangeEvent } from "react";

import ShowSetBoxContext from "../../hooks/ShowSetBoxContext";
import AddDraggedBlockContext from "../../hooks/AddDraggedBlockContext";
import DraggingBlockContext from "../../hooks/DraggingBlockContext";
import DraggedBlocksContext from "../../hooks/DraggedBlocksContext";

import InputParametersSection from "./InputParametersSection";
import SetParametersButtonsSection from "./SetParametersButtonsSection";

function SetParametersMainSection() {
  const [formData, setFormData] = useState({
    parametar1: "",
    parametar2: "",
    parametar3: "",
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
    console.log(formData);
    addBlock({
      id: blocks.length + 1,
      name: draggingBlock,
      input: {
        input1: "Default Input",
        input2: null,
        input3: null,
      },
      parameter: {
        parameter1: +formData.parametar1,
        parameter2: +formData.parametar1,
        parameter3: +formData.parametar1,
      },
      output: "Default Output",
    });
    setFormData({
      parametar1: "",
      parametar2: "",
      parametar3: "",
    });
  };

  return (
    <div className="d-flex flex-column">
      <span className="align-self-end">Napomena</span>
      <form
        onSubmit={handleSubmit}
        onReset={() => {
          showSetBox(false);
        }}
      >
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
