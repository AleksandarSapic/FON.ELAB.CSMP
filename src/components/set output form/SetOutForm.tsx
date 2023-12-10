import { useContext, useEffect, useState } from "react";
import IDraggedBlock from "../../interfaces/IDraggedBlock";
import SetParametersButtonsSection from "../set parameters box/SetParametersButtonsSection";

import SetOutputBoxContext from "../../hooks/SetOutputBoxContext";
import ClickedNavItemContext from "../../hooks/ClickedNavItemContext";
import ConnectionBlocksContext from "../../hooks/ConnectionBlocksContext";
import DraggedBlocksContext from "../../hooks/DraggedBlocksContext";
import SetSelectedDraggedBlockContext from "../../hooks/SetSelectedDraggedBlockContext";

function SetOutForm() {
  const outputBoxContext = useContext(SetOutputBoxContext);
  const outputBox = outputBoxContext.outputBox;
  const setOutputBox = outputBoxContext.setOutputBox;

  const connectionBlocksContext = useContext(ConnectionBlocksContext);
  const connectionBlocks = connectionBlocksContext.connectionBlocks;
  const setConnectionBlocks = connectionBlocksContext.setConnectionBlocks;

  const clickedNavItemContext = useContext(ClickedNavItemContext);
  const setClickedNavItem = clickedNavItemContext.setClickedNavItem;

  const draggedBlocksContext = useContext(DraggedBlocksContext);
  const blocks = draggedBlocksContext?.blocks;
  const setBlocks = draggedBlocksContext?.setBlocks;

  const callSetSelectedBlock = useContext(SetSelectedDraggedBlockContext);

  let updatedSelectedBlock = outputBox.block;
  const [selectedEntry, setSelectedEntry] = useState(1);

  useEffect(() => {
    if (outputBox.block?.input.input1 === null) setSelectedEntry(1);
    else if (outputBox.block?.input.input2 === null) setSelectedEntry(2);
    else if (outputBox.block?.input.input3 === null) setSelectedEntry(3);
  }, [outputBox.block]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConnectionBlocks([connectionBlocks[0], outputBox.block]);
    const updatedBlocks = blocks?.map((block) => {
      if (block.id === connectionBlocks[0]?.id) {
        const newBlock: IDraggedBlock = {
          id: block.id,
          name: block.name,
          input: block.input,
          parameter: block.parameter,
          output: outputBox.block,
          x: block.x,
          y: block.y,
        };
        return newBlock;
      } else if (block.id === outputBox.block?.id) {
        const newBlock: IDraggedBlock = {
          id: block.id,
          name: block.name,
          input: {
            input1:
              selectedEntry === 1 ? connectionBlocks[0] : block.input.input1,
            input2:
              selectedEntry === 2 ? connectionBlocks[0] : block.input.input2,
            input3:
              selectedEntry === 3 ? connectionBlocks[0] : block.input.input3,
          },
          parameter: block.parameter,
          output: block.output,
          x: block.x,
          y: block.y,
        };
        updatedSelectedBlock = newBlock;
        return newBlock;
      } else return block;
    });
    if (updatedBlocks && setBlocks) setBlocks(updatedBlocks);

    setClickedNavItem(0);
    updatedSelectedBlock && callSetSelectedBlock(updatedSelectedBlock);
    setConnectionBlocks([null, null]);
    setOutputBox({
      showBox: false,
      block: null,
      availableInputs: {
        input1: false,
        input2: false,
        input3: false,
      },
    });
  };
  const handleDecline = () => {
    setOutputBox({
      showBox: false,
      block: null,
      availableInputs: {
        input1: false,
        input2: false,
        input3: false,
      },
    });
    setClickedNavItem(0);
    setConnectionBlocks([null, null]);
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute set-parameters-box">
        <span>Odredite ulaz</span>
        <div className="d-flex flex-column w-100">
          <span className="align-self-end">Napomena</span>
          <form method="post" onSubmit={handleSubmit} onReset={handleDecline}>
            <div className="d-flex flex-column justify-content-around">
              <div className="d-flex justify-content-evenly">
                <input
                  id="ulaz-1"
                  name="ulaz"
                  type="radio"
                  disabled={!outputBox.availableInputs.input1}
                  checked={selectedEntry === 1}
                  onChange={() => setSelectedEntry(1)}
                ></input>
                <label
                  htmlFor="ulaz-1"
                  className={
                    !outputBox.availableInputs.input1 ? "readonly" : ""
                  }
                >
                  Ulaz 1
                </label>
              </div>
              <div className="d-flex justify-content-evenly">
                <input
                  id="ulaz-2"
                  name="ulaz"
                  type="radio"
                  disabled={!outputBox.availableInputs.input2}
                  checked={selectedEntry === 2}
                  onChange={() => setSelectedEntry(2)}
                ></input>
                <label
                  htmlFor="ulaz-2"
                  className={
                    !outputBox.availableInputs.input2 ? "readonly" : ""
                  }
                >
                  Ulaz 2
                </label>
              </div>
              <div className="d-flex justify-content-evenly">
                <input
                  id="ulaz-3"
                  name="ulaz"
                  type="radio"
                  disabled={!outputBox.availableInputs.input3}
                  checked={selectedEntry === 3}
                  onChange={() => setSelectedEntry(3)}
                ></input>
                <label
                  htmlFor="ulaz-3"
                  className={
                    !outputBox.availableInputs.input3 ? "readonly" : ""
                  }
                >
                  Ulaz 3
                </label>
              </div>
            </div>
            <SetParametersButtonsSection />
          </form>
        </div>
      </div>
    </>
  );
}

export default SetOutForm;
