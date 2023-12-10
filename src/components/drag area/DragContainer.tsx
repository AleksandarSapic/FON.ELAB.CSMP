import { useContext } from "react";
import { Stage, Layer, Rect, Text, Label, Arrow } from "react-konva";
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

const shapeSize = {
  width: 100,
  height: 60,
};

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
                width={shapeSize.width}
                height={shapeSize.height}
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
        {blocks?.map((block) => {
          return (
            block.output && (
              <Arrow
                key={`line-${block.id}`}
                points={getPoints(
                  block,
                  blocks.find(
                    (blockIterator) => blockIterator.id === block.output?.id
                  )
                )}
                stroke="black"
                strokeWidth={2}
              />
            )
          );
        })}
      </Layer>
    </Stage>
  );
}
export default DragContainer;

const areInputsUsed = (
  block: IDraggedBlock,
  numberOfInputs: number | undefined
) => {
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
};

const getCenter = (block: IDraggedBlock) => {
  return {
    x: block.x + shapeSize.width / 2,
    y: block.y + shapeSize.height / 2,
  };
};

const getPoints = (
  block1: IDraggedBlock,
  block2: IDraggedBlock | undefined
) => {
  if (block2 === undefined) return [0, 0, 0, 0];

  const c1 = getCenter(block1);
  const c2 = getCenter(block2);

  const dx = c1.x - c2.x;
  const dy = c1.y - c2.y;
  const angle = Math.atan2(-dy, dx);

  const startOffset = getRectangleBorderPoint(angle + Math.PI);
  const endOffset = getRectangleBorderPoint(angle);

  const start = {
    x: c1.x - startOffset.x,
    y: c1.y - startOffset.y,
  };

  const end = {
    x: c2.x - endOffset.x,
    y: c2.y - endOffset.y,
  };

  return [start.x, start.y, end.x, end.y];
};

const getRectangleBorderPoint = (radians: number, sideOffset: number = 0) => {
  const width = shapeSize.width + sideOffset * 2;

  const height = shapeSize.height + sideOffset * 2;

  radians %= 2 * Math.PI;
  if (radians < 0) {
    radians += Math.PI * 2;
  }

  const phi = Math.atan(height / width);

  let x = 0,
    y = 0;
  if (
    (radians >= 2 * Math.PI - phi && radians <= 2 * Math.PI) ||
    (radians >= 0 && radians <= phi)
  ) {
    x = width / 2;
    y = Math.tan(radians) * x;
  } else if (radians >= phi && radians <= Math.PI - phi) {
    y = height / 2;
    x = y / Math.tan(radians);
  } else if (radians >= Math.PI - phi && radians <= Math.PI + phi) {
    x = -width / 2;
    y = Math.tan(radians) * x;
  } else if (radians >= Math.PI + phi && radians <= 2 * Math.PI - phi) {
    y = -height / 2;
    x = y / Math.tan(radians);
  }

  return {
    x: -Math.round(x),
    y: Math.round(y),
  };
};
