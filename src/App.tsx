import { useContext, useState } from "react";

import ShowSetBoxContext from "./hooks/ShowSetBoxContext";
import DraggedBlocksContext from "./hooks/DraggedBlocksContext";
import AddDraggedBlockContext from "./hooks/AddDraggedBlockContext";
import DraggingBlockContext from "./hooks/DraggingBlockContext";
import FormContext from "./hooks/FormContext";
import SelectedDraggedBlockContext from "./hooks/SelectedDraggedBlockContext";
import HandleDrop from "./hooks/HandleDropContext";

import AppHeader from "./components/header/AppHeader";
import MainArea from "./components/MainArea";
import SetParametersBox from "./components/set parameters box/SetParametersBox";
import "./style/App.css";

import BlockItems from "./data/BlockItems";
import IDraggedBlock from "./interfaces/IDraggedBlock";
import SetSelectedDraggedBlockContext from "./hooks/SetSelectedDraggedBlockContext";

function App() {
  const [draggingBlock, setDraggingBlock] = useState(
    useContext(DraggingBlockContext)
  );
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
  const [selectedBlock, setSelectedBlock] = useState(
    useContext(SelectedDraggedBlockContext)
  );

  const handleDraggingBlock = (draggingBlockName: string) => {
    setDraggingBlock({
      name: draggingBlockName,
      x: 0,
      y: 0,
    });
  };

  return (
    <>
      <AppHeader />
      <ShowSetBoxContext.Provider value={setDisplaySetBox}>
        <DraggedBlocksContext.Provider value={blocks}>
          <DraggingBlockContext.Provider value={draggingBlock}>
            <SetSelectedDraggedBlockContext.Provider
              value={(block) => setSelectedBlock(block)}
            >
              <SelectedDraggedBlockContext.Provider value={selectedBlock}>
                <HandleDrop.Provider
                  value={(
                    blockName: string,
                    xCoordinate: number,
                    yCoordinate: number
                  ) => {
                    const selectedBlock = BlockItems.find(
                      (block) => block.name === blockName
                    );
                    if (selectedBlock?.numberOfParameters === 0) {
                      const block: IDraggedBlock = {
                        id: blocks.length + 1,
                        name: draggingBlock.name,
                        input: {
                          input1: null,
                          input2: null,
                          input3: null,
                        },
                        parameter: {
                          parameter1: null,
                          parameter2: null,
                          parameter3: null,
                        },
                        output: null,
                        x: xCoordinate,
                        y: yCoordinate,
                      };
                      addBlock([...blocks, block]);
                      setSelectedBlock(block);
                    } else {
                      setDraggingBlock({
                        name: draggingBlock.name,
                        x: xCoordinate,
                        y: yCoordinate,
                      });
                      setFormView({
                        parametar1: {
                          title:
                            selectedBlock?.formView.parametar1.title ||
                            "Parametar 1",
                          readonly:
                            selectedBlock?.formView.parametar1.readonly ||
                            false,
                        },
                        parametar2: {
                          title:
                            selectedBlock?.formView.parametar2.title ||
                            "Parametar 2",
                          readonly:
                            selectedBlock?.formView.parametar2.readonly ||
                            false,
                        },
                        parametar3: {
                          title:
                            selectedBlock?.formView.parametar3.title ||
                            "Parametar 3",
                          readonly:
                            selectedBlock?.formView.parametar3.readonly ||
                            false,
                        },
                      });
                      setDisplaySetBox(true);
                    }
                  }}
                >
                  <MainArea setDraggingBlock={handleDraggingBlock} />
                </HandleDrop.Provider>
              </SelectedDraggedBlockContext.Provider>
              <AddDraggedBlockContext.Provider
                value={(newBlock) => {
                  addBlock([...blocks, newBlock]);
                }}
              >
                <FormContext.Provider value={formView}>
                  {displaySetBox && <SetParametersBox />}
                </FormContext.Provider>
              </AddDraggedBlockContext.Provider>
            </SetSelectedDraggedBlockContext.Provider>
          </DraggingBlockContext.Provider>
        </DraggedBlocksContext.Provider>
      </ShowSetBoxContext.Provider>
    </>
  );
}

export default App;
