import { useContext } from "react";
import { Stage, Layer, Rect, Text, Label, Line } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";

import DraggedBlocksContext from "../../hooks/DraggedBlocksContext";
import SetSelectedDraggedBlockContext from "../../hooks/SetSelectedDraggedBlockContext";
import IDraggedBlock from "../../interfaces/IDraggedBlock";

function DragContainer() {
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
              onClick={() => setSelectedBlock(block.id)}
              onDragMove={handleDragMove}
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
