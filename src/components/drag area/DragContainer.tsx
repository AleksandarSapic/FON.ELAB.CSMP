import { useContext } from "react";
import { Stage, Layer, Rect, Text, Label, Line } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";
import BlockItems from "../../data/BlockItems";
import ErrorMessages from "../../data/ErrorMessages";

import SetOutputBoxContext from "../../hooks/SetOutputBoxContext";
import ClickedNavItemContext from "../../hooks/ClickedNavItemContext";
import DraggedBlocksContext from "../../hooks/DraggedBlocksContext";
import SetSelectedDraggedBlockContext from "../../hooks/SetSelectedDraggedBlockContext";
import IDraggedBlock from "../../interfaces/IDraggedBlock";
import ConnectionBlocksContext from "../../hooks/ConnectionBlocksContext";
import ErrorBoxContext from "../../hooks/ErrorBoxContext";

function DragContainer() {
  const outputBoxContext = useContext(SetOutputBoxContext);
  const setOutputBox = outputBoxContext.setOutputBox;

  const errorBoxContext = useContext(ErrorBoxContext);
  const setErrorBox = errorBoxContext.setErrorBox;

  const connectionBlocksContext = useContext(ConnectionBlocksContext);
  const connectionBlocks = connectionBlocksContext.connectionBlocks;
  const setConnectionBlocks = connectionBlocksContext.setConnectionBlocks;

  const clickedNavItemContext = useContext(ClickedNavItemContext);
  const clickedNavItem = clickedNavItemContext.clickedNavItem;

  const draggedBlocksContext = useContext(DraggedBlocksContext);
  const blocks = draggedBlocksContext?.blocks;
  const setBlocks = draggedBlocksContext?.setBlocks;

  const callSetSelectedBlock = useContext(SetSelectedDraggedBlockContext);

  function setSelectedBlock(id: number) {
    const block = blocks?.find((block) => block.id === id);
    if (block !== undefined) {
      callSetSelectedBlock(block);
    }
  }

  function handleDragMove(event: KonvaEventObject<DragEvent>) {
    const id = event.target.index + 1;
    const newX = event.target.x();
    const newY = event.target.y();

    const updatedBlocks = blocks?.map((block) => {
      if (block.id === id) {
        const newBlock: IDraggedBlock = {
          id: block.id,
          name: block.name,
          input: block.input,
          parameter: block.parameter,
          output: block.output,
          x: newX,
          y: newY,
        };
        return newBlock;
      } else return block;
    });
    if (updatedBlocks && setBlocks) setBlocks(updatedBlocks);
  }

  const handleClick = (id: number) => {
    setSelectedBlock(id);

    if (clickedNavItem === 4) {
      const block = blocks.find((block) => block.id === id);
      const blockSkeleton = BlockItems.find(
        (blockItem) => blockItem.name === block?.name
      );

      if (block !== undefined) {
        if (connectionBlocks[0] === null) {
          if (block?.output !== null) {
            setErrorBox({
              showBox: true,
              blockName: "Ime bloka",
              blockInputs: 0,
              resetFunction: false,
              errorType: ErrorMessages.blokVecImaUlaznuVezu,
            });
            return;
          }
          setConnectionBlocks([block, null]);
        } else {
          if (block === connectionBlocks[0]) {
            setErrorBox({
              showBox: true,
              blockName: "Ime bloka",
              blockInputs: 0,
              resetFunction: false,
              errorType: ErrorMessages.istiBlokZaUlazIIzlaz,
            });
            return;
          }
          if (blockSkeleton?.numberOfInputs === 0) {
            setErrorBox({
              showBox: true,
              blockName: blockSkeleton.name,
              blockInputs: 0,
              resetFunction: true,
              errorType: ErrorMessages.blokNemaUlaznuVezu,
            });
          } else {
            if (areInputsUsed(block, blockSkeleton?.numberOfInputs)) {
              blockSkeleton &&
                setErrorBox({
                  showBox: true,
                  blockName: blockSkeleton.name,
                  blockInputs: blockSkeleton.numberOfInputs,
                  resetFunction: true,
                  errorType: ErrorMessages.izlaziSuPopunjeni,
                });
              return;
            }
            blockSkeleton &&
              setOutputBox({
                showBox: true,
                block: block,
                availableInputs: {
                  input1:
                    blockSkeleton.numberOfInputs >= 1 &&
                    block.input.input1 === null,
                  input2:
                    blockSkeleton.numberOfInputs >= 2 &&
                    block.input.input2 === null,
                  input3:
                    blockSkeleton.numberOfInputs >= 3 &&
                    block.input.input3 === null,
                },
              });
          }
        }
      }
    }
  };

  return (
    <Stage width={1000} height={1000}>
      <Layer>
        {blocks?.map((block) => {
          return (
            <Label
              key={block.id}
              x={block.x}
              y={block.y}
              draggable
              onClick={() => handleClick(block.id)}
              onDragMove={handleDragMove}
              onMouseEnter={(e: KonvaEventObject<MouseEvent>) => {
                const container = e.target.getStage()?.container();
                container && (container.style.cursor = "pointer");
              }}
              onMouseLeave={(e: KonvaEventObject<MouseEvent>) => {
                const container = e.target.getStage()?.container();
                container && (container.style.cursor = "default");
              }}
              onDragStart={(e: KonvaEventObject<MouseEvent>) => {
                const container = e.target.getStage()?.container();
                container && (container.style.cursor = "grab");
              }}
              onDragEnd={(e: KonvaEventObject<MouseEvent>) => {
                const container = e.target.getStage()?.container();
                container && (container.style.cursor = "pointer");
              }}
            >
              <Rect
                width={100}
                height={60}
                fill="#f1f2f4"
                shadowBlur={10}
                shadowColor="#808080"
              />
              <Text
                text={block.id + " " + block.name}
                fontSize={15}
                width={100}
                height={60}
                align="center"
                verticalAlign="middle"
              />
            </Label>
          );
        })}
      </Layer>
    </Stage>
  );
}
export default DragContainer;
function areInputsUsed(
  block: IDraggedBlock,
  numberOfInputs: number | undefined
) {
  if (numberOfInputs === 1) {
    return block.input.input1 !== null;
  } else if (numberOfInputs === 2) {
    return block.input.input1 !== null && block.input.input2 !== null;
  } else if (numberOfInputs === 3) {
    return (
      block.input.input1 !== null &&
      block.input.input2 !== null &&
      block.input.input3 !== null
    );
  }
}
