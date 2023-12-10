import { useContext, useState } from "react";

import SetOutputBoxContext from "./hooks/SetOutputBoxContext";
import ErrorBoxContext from "./hooks/ErrorBoxContext";
import ClickedNavItemContext from "./hooks/ClickedNavItemContext";
import ConnectionBlocksContext from "./hooks/ConnectionBlocksContext";
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
import SetOutForm from "./components/set output form/SetOutForm";
import ErrorBox from "./components/set output form/ErrorBox";

function App() {
  const outputBoxContext = useContext(SetOutputBoxContext);
  const connectionBlocksContext = useContext(ConnectionBlocksContext);
  const errorBoxContext = useContext(ErrorBoxContext);

  const [outputBox, setOutputBox] = useState(outputBoxContext.outputBox);
  const [clickedNavItem, setClickedNavItem] = useState(0);
  const [connectionBlocks, setConnectionBlocks] = useState(
    connectionBlocksContext.connectionBlocks
  );
  const [draggingBlock, setDraggingBlock] = useState(
    useContext(DraggingBlockContext)
  );
  const [blocks, setBlocks] = useState<IDraggedBlock[]>([]);
  const [displaySetParamBox, setDisplaySetParamBox] = useState(false);
  const [errorBox, setErrorBox] = useState(errorBoxContext.errorBox);
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
      <SetOutputBoxContext.Provider value={{ outputBox, setOutputBox }}>
        <ErrorBoxContext.Provider value={{ errorBox, setErrorBox }}>
          <ClickedNavItemContext.Provider
            value={{ clickedNavItem, setClickedNavItem }}
          >
            <ConnectionBlocksContext.Provider
              value={{ connectionBlocks, setConnectionBlocks }}
            >
              <AppHeader />
              <DraggedBlocksContext.Provider value={{ blocks, setBlocks }}>
                <SetSelectedDraggedBlockContext.Provider
                  value={(block) => setSelectedBlock(block)}
                >
                  <ShowSetBoxContext.Provider value={setDisplaySetParamBox}>
                    <DraggingBlockContext.Provider value={draggingBlock}>
                      <SelectedDraggedBlockContext.Provider
                        value={selectedBlock}
                      >
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
                              setBlocks([...blocks, block]);
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
                                    selectedBlock?.formView.parametar1
                                      .readonly || false,
                                },
                                parametar2: {
                                  title:
                                    selectedBlock?.formView.parametar2.title ||
                                    "Parametar 2",
                                  readonly:
                                    selectedBlock?.formView.parametar2
                                      .readonly || false,
                                },
                                parametar3: {
                                  title:
                                    selectedBlock?.formView.parametar3.title ||
                                    "Parametar 3",
                                  readonly:
                                    selectedBlock?.formView.parametar3
                                      .readonly || false,
                                },
                              });
                              setDisplaySetParamBox(true);
                            }
                          }}
                        >
                          <MainArea setDraggingBlock={handleDraggingBlock} />
                        </HandleDrop.Provider>
                      </SelectedDraggedBlockContext.Provider>
                      <AddDraggedBlockContext.Provider
                        value={(newBlock) => {
                          setBlocks([...blocks, newBlock]);
                        }}
                      >
                        <FormContext.Provider value={formView}>
                          {displaySetParamBox && <SetParametersBox />}
                        </FormContext.Provider>
                      </AddDraggedBlockContext.Provider>
                    </DraggingBlockContext.Provider>
                  </ShowSetBoxContext.Provider>

                  {outputBox.showBox && <SetOutForm />}
                </SetSelectedDraggedBlockContext.Provider>
              </DraggedBlocksContext.Provider>
              {errorBox.showBox && <ErrorBox />}
            </ConnectionBlocksContext.Provider>
          </ClickedNavItemContext.Provider>
        </ErrorBoxContext.Provider>
      </SetOutputBoxContext.Provider>
    </>
  );
}

export default App;
