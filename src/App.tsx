import { useState } from "react";

import ShowSetBoxContext from "./hooks/ShowSetBoxContext";
import DraggedBlocksContext from "./hooks/DraggedBlocksContext";
import AddDraggedBlockContext from "./hooks/AddDraggedBlockContext";
import DraggingBlockContext from "./hooks/DraggingBlockContext";
import FormContext from "./hooks/FormContext";

import AppHeader from "./components/header/AppHeader";
import MainArea from "./components/MainArea";
import SetParametersBox from "./components/set parameters box/SetParametersBox";
import "./style/App.css";

import BlockItems from "./data/BlockItems";
import IDraggedBlock from "./interfaces/IDraggedBlock";

function App() {
  const [draggingBlock, setDraggingBlock] = useState("");
  const [blocks, addBlock] = useState<IDraggedBlock[]>([]);
  const [displaySetBox, setDisplaySetBox] = useState(false);
  const [formView, setFormView] = useState({
    parametar1: {
      title: "Parametar 1",
      readonly: false,
    },
    parametar2: {
      title: "Parametar 2",
      readonly: false,
    },
    parametar3: {
      title: "Parametar 3",
      readonly: false,
    },
  });

  const handleDraggingBlock = (draggingBlockName: string) => {
    setDraggingBlock(draggingBlockName);
  };

  const handleDrop = (blockName: string) => {
    const selectedBlock = BlockItems.find((block) => block.name === blockName);
    if (selectedBlock?.numberOfParameters === 0) {
      const block: IDraggedBlock = {
        id: blocks.length + 1,
        name: draggingBlock,
        input: {
          input1: "Default Input",
          input2: null,
          input3: null,
        },
        parameter: {
          parameter1: null,
          parameter2: null,
          parameter3: null,
        },
        output: "Default Output",
      };
      addBlock([...blocks, block]);
    } else {
      setFormView({
        parametar1: {
          title: selectedBlock?.formView.parametar1.title || "Parametar 1",
          readonly: selectedBlock?.formView.parametar1.readonly || false,
        },
        parametar2: {
          title: selectedBlock?.formView.parametar2.title || "Parametar 2",
          readonly: selectedBlock?.formView.parametar2.readonly || false,
        },
        parametar3: {
          title: selectedBlock?.formView.parametar3.title || "Parametar 3",
          readonly: selectedBlock?.formView.parametar3.readonly || false,
        },
      });
      setDisplaySetBox(true);
    }
  };

  return (
    <>
      <AppHeader />
      <ShowSetBoxContext.Provider value={setDisplaySetBox}>
        <DraggedBlocksContext.Provider value={blocks}>
          <DraggingBlockContext.Provider value={draggingBlock}>
            <MainArea
              setDraggingBlock={handleDraggingBlock}
              handleDrop={handleDrop}
            />
            <AddDraggedBlockContext.Provider
              value={(newBlock) => {
                addBlock([...blocks, newBlock]);
              }}
            >
              <FormContext.Provider value={formView}>
                <SetParametersBox display={displaySetBox} />
              </FormContext.Provider>
            </AddDraggedBlockContext.Provider>
          </DraggingBlockContext.Provider>
        </DraggedBlocksContext.Provider>
      </ShowSetBoxContext.Provider>
    </>
  );
}

export default App;
