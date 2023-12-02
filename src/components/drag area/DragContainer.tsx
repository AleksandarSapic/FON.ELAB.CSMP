import { useContext } from "react";
import { Stage, Layer, Rect, Text, Label, Line } from "react-konva";

import DraggedBlocksContext from "../../hooks/DraggedBlocksContext";
import SetSelectedDraggedBlockContext from "../../hooks/SetSelectedDraggedBlockContext";

function DragContainer() {
  const blocks = useContext(DraggedBlocksContext);
  const callSetSelectedBlock = useContext(SetSelectedDraggedBlockContext);

  function setSelectedBlock(id: number) {
    const block = blocks.find((block) => block.id === id);
    if (block !== undefined) {
      callSetSelectedBlock(block);
    }
  }

  return (
    <Stage width={1000} height={1000}>
      <Layer>
        {blocks.map((block) => (
          <Label
            key={block.id}
            x={block.x}
            y={block.y}
            draggable
            onClick={() => setSelectedBlock(block.id)}
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
        ))}
      </Layer>
    </Stage>
  );
}
export default DragContainer;
